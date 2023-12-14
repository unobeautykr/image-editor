import { Box, IconButton } from '@mui/material';
import { Thickness } from '../Thickness';

const thicknesses = [1, 2, 3, 4, 5];
export const FreedrawConfigView = ({ value, onChange }: any) => {
  const onClickThickness = (t: any) => {
    onChange({
      thickness: t,
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
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
