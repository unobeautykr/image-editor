import { Box } from "@mui/material";

export const Thickness = ({ thickness, selected }) => {
  return (
    <Box
      sx={{
        width: 32,
        height: 32,
        backgroundColor: selected ? "black" : "transparent",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: thickness * 4,
          height: thickness * 4,
          borderRadius: "50%",
          backgroundColor: selected ? "white" : "black",
        }}
      ></Box>
    </Box>
  );
};
