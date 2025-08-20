import { observer } from 'mobx-react';
import { useEffect, useRef, useState } from 'react';
import { BrushToolbarContent } from './BrushToolbarContent/BrushToolbarContent';
import { TextToolbarContent } from './TextToolbarContent/TextToolbarContent';
import { ImageToolbarContent } from './ImageToolbarContent/ImageToolbarContent';
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
import { TemplateToolbarContent } from './BrushToolbarContent/TemplateToolbarContent';

const Icon = ({ toolbarMode }: { toolbarMode: string }) => {
  const { tool } = useTool();

  if (toolbarMode === EditorCore.Mode.TEXT) {
    return <TextToolIcon />;
  } else if (toolbarMode === EditorCore.Mode.IMAGE) {
    return <ImageToolIcon />;
  }
  return tool === ToolName.PAN ? (
    <PanToolIcon />
  ) : tool === ToolName.ERASER ? (
    <EraserToolIcon />
  ) : tool === ToolName.FREEDRAW ? (
    <PenToolIcon />
  ) : tool === ToolName.MARKER ? (
    <MarkerToolIcon />
  ) : (
    <SelectToolIcon />
  );
};

export const Toolbar = observer(
  ({
    leadingItems,
    mode: editorMode,
  }: {
    leadingItems: any;
    mode: EditorMode;
  }) => {
    const { core, toolbarPosition } = useImageEditor();
    const [mode, setMode] = useState(core.mode);
    const wrapperRef = useRef(null);
    const [showControlPad, setShowControlPad] = useState(true);
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const toolbarSize = useElementSize(wrapperRef);
    const { toolbarVerticalPosition } = toolbarSettings;

    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        // cleanup
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      return core.on(EditorCore.Event.MODE_CHANGE, setMode);
    }, [core]);

    const handleToggleShowControlPad = () => {
      setShowControlPad(!showControlPad);
    };

    return (
      <>
        <Box
          className="toolbar-wrapper"
          toolbarposition={toolbarPosition}
          $toolbarverticalposition={toolbarVerticalPosition}
          window_width={width}
          window_height={height}
          toolbar_width={toolbarSize?.width}
          toolbar_height={toolbarSize?.height}
          $showcontrolpad={showControlPad}
        >
          <div
            style={{
              position: 'relative',
            }}
          >
            {showControlPad && (
              <Paper
                ref={wrapperRef}
                sx={{
                  display: 'flex',
                  backgroundColor: grey[50],
                  alignItems: 'center',
                  gap: 1,
                  ...(toolbarPosition === 'right' && {
                    flexDirection: 'column',
                    width: 88,
                    py: 2,
                  }),
                  ...(toolbarPosition === 'bottom' && {
                    flexDirection: 'row',
                    height: 88,
                    px: '27px',
                  }),
                }}
              >
                {toolbarPosition === 'bottom' && (
                  <Box
                    className="control-wrapper-1"
                    toolbarposition={toolbarPosition}
                  >
                    <Box className="toggle-show-control-box">
                      <IconButton
                        className="show-control-box-btn rotate-180 hide-control-box-btn border-none"
                        onClick={handleToggleShowControlPad}
                      >
                        <SVGIcon variant="fold" width={16} height={16} />
                      </IconButton>
                    </Box>
                  </Box>
                )}
                {leadingItems && (
                  <Box
                    className="leading-items"
                    sx={{
                      display: 'flex',
                      gap: 1,
                      ...(toolbarPosition === 'right' && {
                        flexDirection: 'column',
                      }),
                      ...(toolbarPosition === 'bottom' && {
                        flexDirection: 'row',
                      }),
                    }}
                  >
                    {leadingItems}
                  </Box>
                )}
                <Box
                  className="toolbar-contents"
                  sx={{
                    display: 'grid',
                    position: 'relative',
                    color: 'black',
                    gap: '16px',
                    ...(toolbarPosition === 'right' &&
                      (mode === EditorCore.Mode.IMAGE
                        ? {
                            gridTemplateRows: `799px`,
                          }
                        : {
                            gridTemplateRows:
                              editorMode === 'image'
                                ? `583px 88px 128px`
                                : mode === EditorCore.Mode.TEXT
                                ? `400px 88px 50px`
                                : '400px 88px',
                          })),
                    ...(toolbarPosition === 'bottom' &&
                      (mode === EditorCore.Mode.IMAGE
                        ? {
                            gridTemplateColumns: `655px`,
                          }
                        : {
                            gridTemplateColumns:
                              editorMode === 'image'
                                ? `439px 88px 128px`
                                : mode === EditorCore.Mode.TEXT
                                ? `320px 88px 50px`
                                : '320px 88px',
                          })),
                  }}
                >
                  {mode === EditorCore.Mode.BRUSH &&
                    (editorMode === 'image' ? (
                      <BrushToolbarContent />
                    ) : (
                      <TemplateToolbarContent />
                    ))}
                  {mode === EditorCore.Mode.TEXT && <TextToolbarContent />}
                  {mode === EditorCore.Mode.IMAGE && <ImageToolbarContent />}
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
            <Box className="show-control-btn-wrapper ">
              <IconButton
                className="show-control-box-btn btn-type-1"
                onClick={handleToggleShowControlPad}
              >
                <Icon toolbarMode={mode} />
              </IconButton>
            </Box>
          </Box>
        )}
      </>
    );
  }
);
