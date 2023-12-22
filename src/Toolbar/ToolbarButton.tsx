import {
  IconButton as MuiIconButton,
  Tooltip,
  Typography as MuiTypography,
  styled,
} from '@mui/material';
import { ReactNode } from 'react';
import { grey } from '@mui/material/colors';
import { useImageEditor } from '~/ImageEditor';

const IconButton = styled(MuiIconButton)<{ selected: boolean }>(
  ({ selected, disabled }) => `
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

const Typography = styled(MuiTypography)(
  () => `
  font-family: Apple SD Gothic Neo;
  font-size: 11px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
`
);

type ToolbarButtonProps = {
  Icon: (props: any) => JSX.Element | null;
  selected?: boolean;
  small?: boolean;
  tooltip?: ReactNode;
  disableToolbar?: boolean;
  onClick?: (value?: any) => void;
  disabled?: boolean;
  sx?: any;
};

export const ToolbarButton = ({
  Icon,
  selected = false,
  small = false,
  tooltip,
  disableToolbar = false,
  sx,
  disabled,
  ...props
}: ToolbarButtonProps) => {
  const { toolbarPosition } = useImageEditor();
  return disableToolbar ? (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <IconButton
        color="inherit"
        disabled={disabled}
        sx={{
          ':disabled': {
            backgroundColor: grey[200],
            color: grey[400],
          },
          ':hover': {
            backgroundColor: selected ? 'black' : grey[200],
          },
          p: small ? 1 : 1.25,
          borderRadius: '50%',
          backgroundColor: selected ? 'black' : grey[200],
          color: selected ? 'white' : 'black',
          ...sx,
        }}
        selected={selected}
        {...props}
      >
        <Icon sx={{ fontSize: small ? 16 : 20 }} />
      </IconButton>
      <Typography variant="body1">{tooltip}</Typography>
    </span>
  ) : (
    <Tooltip
      title={tooltip}
      arrow
      placement={toolbarPosition === 'right' ? 'left' : 'top'}
    >
      <span style={{ cursor: 'pointer' }}>
        <IconButton
          disabled={disabled}
          color="inherit"
          selected={selected}
          sx={{
            ':disabled': {
              backgroundColor: grey[200],
              color: grey[400],
            },
            ':hover': {
              backgroundColor: selected ? 'black' : grey[200],
            },
            p: small ? 1 : 1.2,
            borderRadius: '50%',
            backgroundColor: selected ? 'black' : grey[200],
            color: selected ? 'white' : 'black',
            ...sx,
          }}
          {...props}
        >
          <Icon sx={{ fontSize: small ? 16 : 20 }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};
