import { SvgIcon, SvgIconProps } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_eraser.svg';

export function EraserToolIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
