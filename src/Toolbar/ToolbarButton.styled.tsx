import {
  IconButton as MuiIconButton,
  Typography as MuiTypography,
  styled,
  Box as MuiBox,
} from '@mui/material';
import { grey } from '@mui/material/colors';

export const Box = styled(MuiBox)(
  () => `
  &.toolbar-btn-wrapper {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`
);

export const IconButton = styled(MuiIconButton)<{ selected: boolean }>(
  ({ selected, disabled }) => `
  ${selected ? 'background: black;' : ``}
  svg {
    width: 20px
    height: 20px;
  }
  ${
    selected
      ? `
      svg, path {
        fill: white;
      }  
    `
      : ''
  }
  ${
    disabled
      ? `
      svg, path {
        fill: ${grey[400]};
      }
    `
      : ''
  }
`
);

export const Typography = styled(MuiTypography)(
  () => `
  font-family: Apple SD Gothic Neo;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  white-space: nowrap;
`
);
