import { styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';

export const ToolbarButton = styled(_ToolbarButton)<{}>(
  () => `
  &.inner-btn {
    gap: 10px !important;
    &.svg-20 {
      svg,path {
        width: 20px;
        height: 20px;
      }
    }
    &.flex-row {
      flex-direction: row !important;
    }
    &.flex-column {
      flex-direction: column !important;
    }
    &.bg-grey {
      .MuiIconButton-root {
        background: ${grey[200]};
      }
    }
    .MuiTypography-root {
      background: ${grey[200]};
      border-radius: 2px;
      padding: 0 6px;
      line-height: 18px;
    }
  }
`
);
