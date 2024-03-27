import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function SelectToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="hand" />}
      {...props}
    />
  );
}
