import { Tooltip } from '@mui/material';
import { ReactNode } from 'react';
import { grey } from '@mui/material/colors';
import { useImageEditor } from '~/ImageEditor';
import { Box, IconButton, Typography } from './ToolbarButton.styled';

type ToolbarButtonProps = {
  Icon: (props: any) => JSX.Element | null;
  selected?: boolean;
  small?: boolean;
  tooltip?: ReactNode;
  disableToolbar?: boolean;
  onClick?: (value?: any) => void;
  disabled?: boolean;
  sx?: any;
  className?: string;
};

export const ToolbarButton = ({
  Icon,
  selected = false,
  small = false,
  tooltip,
  disableToolbar = false,
  sx,
  disabled,
  className,
  ...props
}: ToolbarButtonProps) => {
  const { toolbarPosition } = useImageEditor();
  return disableToolbar ? (
    <Box className={`toolbar-btn-wrapper ${className ? className : ''}`}>
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
          color: selected ? 'white' : 'black',
          ...sx,
        }}
        selected={selected}
        {...props}
      >
        <Icon sx={{ fontSize: small ? 16 : 20 }} />
      </IconButton>
      <Typography variant="body1">{tooltip}</Typography>
    </Box>
  ) : (
    <Tooltip
      title={tooltip}
      arrow
      placement={toolbarPosition === 'right' ? 'left' : 'top'}
    >
      <Box
        style={{ cursor: 'pointer' }}
        className={`toolbar-btn-wrapper ${className ? className : ''}`}
      >
        <IconButton
          disabled={disabled}
          color="inherit"
          selected={selected}
          className=""
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
      </Box>
    </Tooltip>
  );
};
