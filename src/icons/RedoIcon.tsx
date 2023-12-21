import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_redo.svg';

export function RedoIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
