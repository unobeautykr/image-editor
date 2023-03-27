import { Box, IconButton } from "@mui/material";

const Thickness = ({ thickness, selected }) => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: selected ? "black" : "transparent",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
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

const thicknesses = [1, 2, 3, 4, 5];
export const MarkerConfigView = ({ value, onChange }) => {
  const onClickThickness = (t) => {
    onChange({
      thickness: t,
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {thicknesses.map((t) => (
          <IconButton key={t} onClick={() => onClickThickness(t)}>
            <Thickness thickness={t} selected={value.thickness === t} />
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};
