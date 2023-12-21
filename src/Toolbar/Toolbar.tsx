import { useImageEditor } from '../ImageEditor';
import { useEffect, useState } from 'react';
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
import { ReactComponent as FoldIcon } from '~/assets/icons/update_icon/fold_dark_16.svg';

const Paper = styled(MuiPaper)(
  () => `
`
);

const Box = styled(MuiBox)<{ toolbarposition?: 'bottom' | 'right' }>(
  () => `
  &.toolbar-wrapper {
    overflow: auto;
  }
  &.toggle-show-control-box {
    position: absolute;
    margin: 0 18px;
    width: calc(100% - 32px);
    height: 12px;
    top: -12px;
    left: 0;
    background: white;
  }
  &.show-control-btn-wrapper {
    width: 732px;
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
  const [showControlPad, setShowControlPad] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setHeight(window.innerHeight);
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
    <Box
      className="toolbar-wrapper"
      toolbarposition={toolbarPosition}
      sx={{
        display: 'flex',
        width: toolbarPosition === 'right' ? 'initial' : '100vw',
        justifyContent:
          toolbarPosition === 'right' && height < 907 ? 'flex-start' : 'center',
        flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
      }}
    >
      <div
        style={{
          position: 'relative',
          margin: toolbarPosition === 'right' ? 'initial' : 'auto',
        }}
      >
        {toolbarPosition === 'bottom' && showControlPad && (
          <Box className="toggle-show-control-box">
            <IconButton
              className="show-control-box-btn rotate-180 hide-control-box-btn"
              onClick={handleToggleShowControlPad}
            >
              <FoldIcon />
            </IconButton>
          </Box>
        )}
        {showControlPad ? (
          <Paper
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
        ) : (
          <Box className="show-control-btn-wrapper">
            <IconButton
              className="show-control-box-btn "
              onClick={handleToggleShowControlPad}
            >
              <FoldIcon />
            </IconButton>
          </Box>
        )}
      </div>
    </Box>
  );
}
