import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function ImageToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="image" />}
      {...props}
    />
  );
}
