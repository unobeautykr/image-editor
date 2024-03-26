import { Box } from '@mui/system';
import { useImageEditor } from '~/ImageEditor';

interface ToolbarContentProps {
  leadingItems?: any;
  palette?: any;
  trailingItems?: any;
}

export function ToolbarContent({
  leadingItems = null,
  palette = null,
  trailingItems,
}: ToolbarContentProps) {
  const { toolbarPosition } = useImageEditor();

  return (
    <>
      {leadingItems && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
          }}
        >
          {leadingItems}
        </Box>
      )}
      {palette && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
          }}
        >
          {palette}
        </Box>
      )}
      {trailingItems && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '10px',
            flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
          }}
        >
          {trailingItems}
        </Box>
      )}
    </>
  );
}
