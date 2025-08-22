import { SvgIcon, Box as MuiBox, styled } from '@mui/material';
import Icon from './Icon';

const Box = styled(MuiBox)(
  () => `
  width: 24px;
  height: 24px;
  svg, path {
    fill: #000000;
  }
`
);

export function CustomerTemplateIcon(props: any) {
  return (
    <SvgIcon
      inheritViewBox
      component={() => (
        <Box component={'span'}>
          <Icon variant="customer_template" />
        </Box>
      )}
      {...props}
    />
  );
}
