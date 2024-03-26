import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function SimpleInputToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="bookmark" />}
      {...props}
    />
  );
}
