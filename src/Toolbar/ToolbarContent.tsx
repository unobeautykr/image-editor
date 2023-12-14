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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
        }}
      >
        {leadingItems}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
        }}
      >
        {palette}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 2,
          flexDirection: toolbarPosition === 'right' ? 'column' : 'row',
        }}
      >
        {trailingItems}
      </Box>
    </>
  );
}
