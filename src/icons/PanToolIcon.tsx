import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function PanToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="move" />}
      {...props}
    />
  );
}
