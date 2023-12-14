import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/ic-editor-image.svg';

export function ImageToolIcon(props: any) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
