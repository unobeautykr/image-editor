import { SvgIcon } from '@mui/material';
import { ReactComponent } from '~/assets/icons/update_icon/ic_hand.svg';
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
