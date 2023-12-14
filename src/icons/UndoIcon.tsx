import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/ic-editor-undo.svg';

export function UndoIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
