import { useImageEditor } from '../ImageEditor';
import { useEffect, useRef, useState } from 'react';
import { BrushToolbarContent } from './BrushToolbarContent/BrushToolbarContent';
import { TextToolbarContent } from './TextToolbarContent/TextToolbarContent';
import { ImageToolbarContent } from './ImageToolbarContent/ImageToolbarContent';
import { EditorCore } from '../EditorCore';
import { grey } from '@mui/material/colors';
import {
  Box as MuiBox,
  Paper as MuiPaper,
  IconButton as MuiIconButton,
  styled,
} from '@mui/material';
import { useElementSize } from '~/useElementSize';
import { ReactComponent as FoldIcon } from '~/assets/icons/update_icon/fold_dark_16.svg';

const Paper = styled(MuiPaper)(
  () => `
  padding-top: 12px;
`
);

const Box = styled(MuiBox)<{
  toolbarposition?: 'bottom' | 'right';
  window_height?: number;
  window_width?: number;
  toolbar_width?: number;
  toolbar_height?: number;
}>(
  ({
    toolbarposition,
    window_height,
    window_width,
    toolbar_width,
    toolbar_height,
  }) => `
  &.toolbar-wrapper {
    overflow: auto;
    display: flex;
    width: ${toolbarposition === 'right' ? 'initial' : '100vw'};
    justify-content: ${
      (toolbarposition === 'right' &&
        window_height &&
        toolbar_height &&
        window_height < toolbar_height) ||
      (toolbarposition === 'bottom' &&
        window_width &&
        toolbar_width &&
        window_width < toolbar_width)
        ? 'flex-start'
        : 'center'
    };
    flex-direction: ${toolbarposition === 'right' ? 'column' : 'row'};

  }
  &.toggle-show-control-box {
    width: 100%;
    height: 12px;
    background: white;
  }
  &.show-control-btn-wrapper {
    width: 100%;
    padding: 0 40px;
    max-width: 802px;
    height: 88px;
    position:absolute;
    bottom: 0;
    margin: auto;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &.control-wrapper-1 {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
`
);

const IconButton = styled(MuiIconButton)(
  () => `
  
  &.show-control-box-btn {
    border: 1px solid #eeeeee;
    border-radius: 2px;
    background: white;
    width: 34px;
    height: 34px;
    box-shadow: none;
    border: 0 none;
  }
  &.hide-control-box-btn {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    justify-content: flex-start;
    padding-left: 6px;
  }
  &.rotate-180 {
    transform: rotate(180deg);
  }
`
);

export function Toolbar({ leadingItems }: { leadingItems: any }) {
  const { core, toolbarPosition } = useImageEditor();
  const [mode, setMode] = useState(core.mode);
  const wrapperRef = useRef(null);
  const [showControlPad, setShowControlPad] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const toolbarSize = useElementSize(wrapperRef);

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
        window_width={width}
        window_height={height}
        toolbar_width={toolbarSize?.width}
        toolbar_height={toolbarSize?.height}
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
                  px: 2,
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
                      className="show-control-box-btn rotate-180 hide-control-box-btn"
                      onClick={handleToggleShowControlPad}
                    >
                      <FoldIcon />
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
                  color: 'black',
                  gap: '16px',
                  ...(toolbarPosition === 'right' && {
                    gridTemplateRows: `583px 88px 128px`,
                  }),
                  ...(toolbarPosition === 'bottom' && {
                    gridTemplateColumns: `439px 88px 128px`,
                  }),
                }}
              >
                {mode === EditorCore.Mode.BRUSH && <BrushToolbarContent />}
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
          toolbarposition={toolbarPosition}
          window_width={width}
          window_height={height}
        >
          <Box className="show-control-btn-wrapper">
            <IconButton
              className="show-control-box-btn"
              onClick={handleToggleShowControlPad}
            >
              <FoldIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}
