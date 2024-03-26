import { SvgIcon, SvgIconProps } from '@mui/material';
import Icon from './Icon';

export function EraserToolIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant={'eraser'} />}
      {...props}
    />
  );
}
