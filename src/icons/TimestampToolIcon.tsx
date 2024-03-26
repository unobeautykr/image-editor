import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function TimestampToolIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="calendar" />}
      {...props}
    />
  );
}
