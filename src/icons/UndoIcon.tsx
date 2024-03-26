import { SvgIcon } from '@mui/material';
import Icon from './Icon';

export function UndoIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => <Icon variant="undo" />}
      {...props}
    />
  );
}
