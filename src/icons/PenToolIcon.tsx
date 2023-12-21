import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_pencil.svg';

export function PenToolIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
