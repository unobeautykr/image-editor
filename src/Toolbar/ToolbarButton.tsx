import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";

export const ToolbarButton = ({
  Icon,
  selected = false,
  small = false,
  ...props
}) => {
  return (
    <IconButton
      color="inherit"
      sx={{
        ":disabled": {
          backgroundColor: grey[200],
          color: grey[400]
        },
        ":hover": {
          backgroundColor: selected ? "black" : grey[200],
        },
        p: small ? 1 : 1.5,
        borderRadius: "50%",
        backgroundColor: selected ? "black" : grey[200],
        color: selected ? "white" : "black",
      }}
      {...props}
    >
      <Icon sx={{ fontSize: small ? 16 : 20 }} />
    </IconButton>
  );
};
