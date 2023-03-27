import { Box } from "@mui/system";

interface ToolbarContentProps {
  leadingItems?: React.ReactNode;
  palette?: React.ReactNode;
  trailingItems?: React.ReactNode;
}

export function ToolbarContent({
  leadingItems = null,
  palette = null,
  trailingItems,
}: ToolbarContentProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {leadingItems}
      </Box>
      <Box>{palette}</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 2,
        }}
      >
        {trailingItems}
      </Box>
    </>
  );
}
