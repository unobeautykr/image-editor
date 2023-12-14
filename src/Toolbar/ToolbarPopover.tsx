import { Popover } from '@mui/material';

export function ToolbarPopover({ children, ...props }: any) {
  return (
    <Popover
      sx={{
        '& .MuiPaper-root': {
          overflowX: 'unset',
          overflowY: 'unset',
          backgroundColor: 'grey.background',
          '::before': {
            content: '""',
            position: 'absolute',
            marginRight: '-0.71em',
            bottom: 0,
            left: '50%',
            width: 16,
            height: 16,
            backgroundColor: 'grey.background',
            boxShadow: 1,
            transform: `translate(-50%, 50%) rotate(135deg)`,
            clipPath: `polygon(
              -8px -8px,
              calc(100% + 8px) -8px,
              calc(100% + 8px) calc(100% + 8px)
            )`,
          },
        },
      }}
      anchorOrigin={{
        vertical: -16,
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      {...props}
    >
      {children}
    </Popover>
  );
}
