import { observer } from 'mobx-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BrushToolbarContent } from './BrushToolbarContent/BrushToolbarContent';
import { TextToolbarContent } from './TextToolbarContent/TextToolbarContent';
import { ImageToolbarContent } from './ImageToolbarContent/ImageToolbarContent';
import { TemplateToolbarContent } from './BrushToolbarContent/TemplateToolbarContent';
import { EditorCore } from '../EditorCore';
import { grey } from '@mui/material/colors';
import { useElementSize } from '~/useElementSize';
import { useTool, useImageEditor } from '../ImageEditor';
import SVGIcon from '~/icons/Icon';
import { Paper, Box, IconButton } from './Toolbar.styled';
import { ToolName } from '~/EditorCore';
import { PanToolIcon } from '~/icons/PanToolIcon';
import { EraserToolIcon } from '~/icons/EraserToolIcon';
import { SelectToolIcon } from '~/icons/SelectToolIcon';
import { PenToolIcon } from '~/icons/PenToolIcon';
import { MarkerToolIcon } from '~/icons/MarkerToolIcon';
import { TextToolIcon } from '~/icons/TextToolIcon';
import { ImageToolIcon } from '~/icons/ImageToolIcon';
import toolbarSettings from '~/store/toolbarSettings';
import { EditorMode } from '~/types/editor';

interface ToolbarProps {
  leadingItems?: React.ReactNode;
  mode: EditorMode;
}

interface WindowDimensions {
  width: number;
  height: number;
}

const TOOL_ICON_MAP: Record<string, React.ComponentType> = {
  [ToolName.PAN]: PanToolIcon,
  [ToolName.ERASER]: EraserToolIcon,
  [ToolName.FREEDRAW]: PenToolIcon,
  [ToolName.MARKER]: MarkerToolIcon,
};

const MODE_ICON_MAP: Record<string, React.ComponentType> = {
  [EditorCore.Mode.TEXT]: TextToolIcon,
  [EditorCore.Mode.IMAGE]: ImageToolIcon,
};

const useWindowDimensions = (): WindowDimensions => {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return dimensions;
};

const ToolbarIcon: React.FC<{ toolbarMode: string }> = ({ toolbarMode }) => {
  const { tool } = useTool();

  const ModeIcon = MODE_ICON_MAP[toolbarMode];
  if (ModeIcon) {
    return <ModeIcon />;
  }

  const ToolIcon = TOOL_ICON_MAP[tool] || SelectToolIcon;
  return <ToolIcon />;
};

const ToolbarContent: React.FC<{ mode: string; editorMode: EditorMode }> = ({
  mode,
  editorMode,
}) => {
  switch (mode) {
    case EditorCore.Mode.BRUSH:
      return editorMode === 'image' ? (
        <BrushToolbarContent />
      ) : (
        <TemplateToolbarContent />
      );
    case EditorCore.Mode.TEXT:
      return <TextToolbarContent />;
    case EditorCore.Mode.IMAGE:
      return <ImageToolbarContent />;
    default:
      return null;
  }
};

export const Toolbar = observer(
  ({ leadingItems, mode: editorMode }: ToolbarProps) => {
    const { core, toolbarPosition } = useImageEditor();
    const [mode, setMode] = useState(core.mode);
    const [showControlPad, setShowControlPad] = useState(true);

    const wrapperRef = useRef<HTMLDivElement>(null);
    const { width, height } = useWindowDimensions();
    const toolbarSize = useElementSize(wrapperRef);
    const { toolbarVerticalPosition } = toolbarSettings;

    useEffect(() => {
      const unsubscribe = core.on(EditorCore.Event.MODE_CHANGE, setMode);
      return () => unsubscribe?.();
    }, [core]);

    const handleToggleShowControlPad = useCallback(() => {
      setShowControlPad((prev) => !prev);
    }, []);

    const styles = useMemo(() => {
      const isRight = toolbarPosition === 'right';
      const isBottom = toolbarPosition === 'bottom';

      const getGridTemplate = () => {
        const templateKey = isRight
          ? 'gridTemplateRows'
          : 'gridTemplateColumns';

        if (mode === EditorCore.Mode.IMAGE) {
          return { [templateKey]: isRight ? '799px' : '655px' };
        }

        if (editorMode === 'image') {
          return {
            [templateKey]: isRight ? '583px 88px 128px' : '439px 88px 128px',
          };
        }

        if (mode === EditorCore.Mode.TEXT) {
          return {
            [templateKey]: isRight ? '400px 88px 50px' : '320px 88px 50px',
          };
        }

        return { [templateKey]: isRight ? '400px 88px' : '320px 88px' };
      };

      return {
        paper: {
          display: 'flex',
          backgroundColor: grey[50],
          alignItems: 'center',
          gap: 1,
          ...(isRight && {
            flexDirection: 'column',
            width: 88,
            py: 2,
          }),
          ...(isBottom && {
            flexDirection: 'row',
            height: 88,
            px: '27px',
          }),
        },
        leadingItems: {
          display: 'flex',
          gap: 1,
          flexDirection: isRight ? 'column' : 'row',
        },
        toolbarContents: {
          display: 'grid',
          position: 'relative',
          color: 'black',
          gap: '16px',
          ...getGridTemplate(),
        },
      };
    }, [toolbarPosition, mode, editorMode]);

    const boxWrapperProps = useMemo(
      () => ({
        toolbarposition: toolbarPosition,
        $toolbarverticalposition: toolbarVerticalPosition,
        window_width: width,
        window_height: height,
        toolbar_width: toolbarSize?.width,
        toolbar_height: toolbarSize?.height,
        $showcontrolpad: showControlPad,
      }),
      [
        toolbarPosition,
        toolbarVerticalPosition,
        width,
        height,
        toolbarSize?.width,
        toolbarSize?.height,
        showControlPad,
      ]
    );

    return (
      <>
        <Box className="toolbar-wrapper" {...boxWrapperProps}>
          <div style={{ position: 'relative' }}>
            {showControlPad && (
              <Paper ref={wrapperRef} sx={styles.paper}>
                {toolbarPosition === 'bottom' && (
                  <Box
                    className="control-wrapper-1"
                    toolbarposition={toolbarPosition}
                  >
                    <Box className="toggle-show-control-box">
                      <IconButton
                        className="show-control-box-btn rotate-180 hide-control-box-btn border-none"
                        onClick={handleToggleShowControlPad}
                        aria-label="툴바 숨기기"
                      >
                        <SVGIcon variant="fold" width={16} height={16} />
                      </IconButton>
                    </Box>
                  </Box>
                )}

                {leadingItems && (
                  <Box className="leading-items" sx={styles.leadingItems}>
                    {leadingItems}
                  </Box>
                )}

                <Box className="toolbar-contents" sx={styles.toolbarContents}>
                  <ToolbarContent mode={mode} editorMode={editorMode} />
                </Box>
              </Paper>
            )}
          </div>
        </Box>
        {!showControlPad && (
          <Box
            className="toolbar-wrapper control-wrapper-2"
            $showcontrolpad={showControlPad}
            toolbarposition={toolbarPosition}
            window_width={width}
            window_height={height}
          >
            <Box className="show-control-btn-wrapper">
              <IconButton
                className="show-control-box-btn btn-type-1"
                onClick={handleToggleShowControlPad}
                aria-label="툴바 보이기"
              >
                <ToolbarIcon toolbarMode={mode} />
              </IconButton>
            </Box>
          </Box>
        )}
      </>
    );
  }
);
