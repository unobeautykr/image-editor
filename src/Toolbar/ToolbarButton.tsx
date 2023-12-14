import { IconButton, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useImageEditor } from '~/ImageEditor';

export const ToolbarButton = ({
  Icon,
  selected = false,
  small = false,
  tooltip,
  ...props
}: any) => {
  const { toolbarPosition } = useImageEditor();
  return (
    <Tooltip
      title={tooltip}
      arrow
      placement={toolbarPosition === 'right' ? 'left' : 'top'}
    >
      <span>
        <IconButton
          color="inherit"
          sx={{
            ':disabled': {
              backgroundColor: grey[200],
              color: grey[400],
            },
            ':hover': {
              backgroundColor: selected ? 'black' : grey[200],
            },
            p: small ? 1 : 1.5,
            borderRadius: '50%',
            backgroundColor: selected ? 'black' : grey[200],
            color: selected ? 'white' : 'black',
          }}
          {...props}
        >
          <Icon sx={{ fontSize: small ? 16 : 20 }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};
