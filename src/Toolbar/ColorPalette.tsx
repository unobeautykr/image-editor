import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import colorwheel from '~/assets/images/colorwheel.png';
import { useCallback, useState } from 'react';
import { ToolbarPopover } from './ToolbarPopover';
import {
  amber,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lime,
  orange,
  pink,
  purple,
  red,
  yellow,
} from '@mui/material/colors';
import { PresetColor } from '../EditorCore';
import { useImageEditor } from '~/ImageEditor';

const colors = [
  PresetColor.BLACK,
  PresetColor.RED,
  PresetColor.YELLOW,
  PresetColor.GREEN,
  PresetColor.BLUE,
];

function ColorButton({ type, color, selected, onClick }: any) {
  return (
    <IconButton sx={{ p: 0 }} onClick={onClick}>
      <svg width="24" height="24">
        <mask id="mask">
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
          <circle cx="50%" cy="50%" r="8" fill="white" />
        </mask>
        {type === 'preset' ? (
          <circle
            cx="50%"
            cy="50%"
            r="50%"
            fill={color}
            mask={selected ? 'url(#mask)' : ''}
          />
        ) : (
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            href={colorwheel}
            mask={selected ? 'url(#mask)' : ''}
          ></image>
        )}

        {color && <circle cx="50%" cy="50%" r="8" fill={color} />}
      </svg>
    </IconButton>
  );
}

const levels = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const greyLevels = [
  '#ffffff',
  ...levels.map((l: any) => (grey as any)[l]),
  '#000000',
];
const hues = [
  lightBlue,
  indigo,
  deepPurple,
  purple,
  pink,
  red,
  orange,
  amber,
  yellow,
  lime,
  green,
];
const gridColors = greyLevels.concat(
  ...levels.map((l) => hues.map((c: any) => c[l]))
);

function ColorGridItem({ color, onClick }: any) {
  return (
    <Box
      sx={{
        width: 24,
        height: 24,
        borderRadius: 0,
        p: 0,
        backgroundColor: color,
      }}
      onClick={onClick}
    ></Box>
  );
}

function ColorGrid({ onChange }: any) {
  return (
    <Box
      sx={{
        p: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 1fr)',
      }}
    >
      {gridColors.map((c) => (
        <ColorGridItem key={c} color={c} onClick={() => onChange(c)} />
      ))}
    </Box>
  );
}

export function ColorPalette({ value, onChange }: any) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { toolbarPosition } = useImageEditor();

  const onClickColor = (c: any) => {
    if (!value) return;

    onChange({
      type: 'preset',
      code: c,
    });
  };

  const onClickCustom = (e: any) => {
    if (!value) return;

    setAnchorEl(e.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const onChangeCustomColor = (c: any) => {
    onChange({
      type: 'custom',
      code: c,
    });
    handleClose();
  };

  return (
    <Box
      sx={{
        display: 'grid',
        ...(toolbarPosition === 'bottom' && {
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(3, minmax(0, min-content))',
        }),
        ...(toolbarPosition === 'right' && {
          gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(2, minmax(0, min-content))',
        }),
        gridRowGap: '6px',
        gridColumnGap: '8px',
      }}
    >
      {colors.map((c, i) => (
        <ColorButton
          key={i}
          selected={value?.type === 'preset' && value?.code === c}
          type="preset"
          color={c}
          onClick={() => onClickColor(c)}
        />
      ))}
      <ColorButton
        selected={value?.type === 'custom'}
        type="custom"
        color={value?.type === 'custom' ? value?.code : null}
        onClick={onClickCustom}
      />
      <ToolbarPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: -16,
          horizontal: 'center',
        }}
      >
        <ColorGrid onChange={onChangeCustomColor} />
      </ToolbarPopover>
    </Box>
  );
}
