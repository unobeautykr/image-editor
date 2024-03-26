import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function MarkerToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="pen" />}
      {...props}
    />
  );
}
