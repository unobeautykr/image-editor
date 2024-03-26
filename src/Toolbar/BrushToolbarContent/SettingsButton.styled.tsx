import {
  MenuList as MuiList,
  MenuItem as MuiMenuItem,
  Stack as MuiStack,
  Popper as MuiPopper,
  styled,
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  Button as MuiButton,
  Radio as MuiRadio,
  FormControlLabel as MuiFormControlLabel,
  Switch as MuiSwitch,
} from '@mui/material';

export const Switch = styled(MuiSwitch)(
  () => `
  width: 32px;
  height: 20px;
  padding: 0;
  display: flex;
  margin-left: 12px;

  &:active {
    & .MuiSwitch-thumb {
      width: 19px;
    }
    & .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(9px);
    }
  }
  & .MuiSwitch-switchBase {
    padding: 2px;
    &.Mui-checked {
      transform: translateX(12px);
      color: #fff;
      & + .MuiSwitch-track {
        opacity: 1;
        background-color: #2C62F6;
      }
    }
    &.Mui-disabled {
      color:#E6E6E6 !important;
    }
    &.Mui-checked.Mui-disabled+.MuiSwitch-track{
      opacity: 0.2;
      background-color: #BBBBBB;
    }
  }
  & .MuiSwitch-thumb {
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    width: 16px;
    height: 16px;
    border-radius: 10;
  }
  & .MuiSwitch-track {
    border-radius: 12px;
    opacity: 1;
    background-color: #EEEEEE;
    box-sizing: border-box;
  }
`
);

export const FormControlLabel = styled(MuiFormControlLabel)(
  () => `
  .MuiTypography-root  {
    font-size: 13px;
    font-weight: 400;
    line-height: 18.82px;
    text-align: center;
    margin-bottom: 10px;
  }
`
);

export const Radio = styled(MuiRadio)(
  () => `
  padding: 0;
  color: #DEE2EC;

  &.Mui-checked {
    color: #DEE2EC;

    svg:nth-of-type(2) {
      color: #2C62F6;
      transform: scale(1.2);
    }
  }
`
);

export const Stack = styled(MuiStack)(
  () => `
  &.controller-wrapper {
    gap: 30px;
  }
  &.controller {
    gap: 10px;
  }
`
);

export const MenuList = styled(MuiList)(
  () => `
  background: #ffffff;
  border-radius: 4px;
  padding: 0;
`
);

export const MenuItem = styled(MuiMenuItem)(
  () => `
  min-height:40px !important; 

  .MuiTypography-root {
    font-size: 13px;
    font-weight: 400;
    line-height: 18.82px;
  }

`
);

export const Popper = styled(MuiPopper)(
  () => `
  &[data-popper-placement*="top"] {
    span.arrow {
      bottom: -10px;
    }
  }

  &[data-popper-placement*="bottom"] {
    span.arrow {
      top: -10px;

      svg {
        transform: scaleY(-100%);
      }
    }
  }
`
);

export const Button = styled(MuiButton)(
  () => `
  padding: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 18.15px;
  color: #2C62F6;
  min-width: unset;
`
);

export const Dialog = styled(MuiDialog)(() => ``);

export const DialogTitle = styled(MuiDialogTitle)(
  () => `
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DEE2EC;
`
);

export const DialogContent = styled(MuiDialogContent)(
  () => `
  padding: 30px 40px 46px !important;
`
);
