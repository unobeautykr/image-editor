import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function TextToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="text" />}
      {...props}
    />
  );
}
