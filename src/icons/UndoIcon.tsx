import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_undo.svg';

export function UndoIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
