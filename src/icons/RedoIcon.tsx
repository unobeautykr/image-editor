import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function RedoIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="redo" />}
      {...props}
    />
  );
}
