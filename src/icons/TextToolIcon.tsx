import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_text.svg';

export function TextToolIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
