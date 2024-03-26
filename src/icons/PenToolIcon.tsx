import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function PenToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="pencil" />}
      {...props}
    />
  );
}
