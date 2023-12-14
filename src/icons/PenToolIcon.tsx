import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/ic-editor-pen.svg';

export function PenToolIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
