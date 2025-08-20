import { Box as MuiBox, styled } from '@mui/material';
import { ToolbarPosition } from './types/editor';

export const Box = styled(MuiBox, {
  shouldForwardProp: (prop) => prop !== 'toolbarPosition',
})<{ toolbarPosition?: ToolbarPosition }>(
  ({ toolbarPosition }) => `
  &.toolbar-wrapper-box {
    ${toolbarPosition === 'right' ? 'height: 100%;' : 'width: 100%;'}
    overflow: auto;
  }
`
);
