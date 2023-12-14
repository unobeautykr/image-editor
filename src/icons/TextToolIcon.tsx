import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/ic-editor-text.svg';

export function TextToolIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
