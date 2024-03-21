import {
  Box as MuiBox,
  Paper as MuiPaper,
  IconButton as MuiIconButton,
  styled as muiStyled,
} from '@mui/material';
import styled from 'styled-components';

export const Paper = muiStyled(MuiPaper)(
  () => `
  border-radius: 43px;
  box-shadow: 0px 4px 4px 0px #D1D1D140;
`
);

export const Box = styled(MuiBox)<{
  toolbarposition?: 'bottom' | 'right';
  $toolbarverticalposition?: 'bottom' | 'top';
  window_height?: number;
  window_width?: number;
  toolbar_width?: number;
  toolbar_height?: number;
  $showcontrolpad?: boolean;
}>(
  ({
    $toolbarverticalposition,
    toolbarposition,
    window_height,
    window_width,
    toolbar_width,
    toolbar_height,
    $showcontrolpad,
  }) => `
  &.toolbar-wrapper {
    ${
      $showcontrolpad &&
      ($toolbarverticalposition === 'bottom'
        ? 'padding-bottom: 10px;'
        : 'padding-top: 10px;')
    }
    display: flex;
    width: ${toolbarposition === 'right' ? 'initial' : '100vw'};
    justify-content: ${
      (toolbarposition === 'right' &&
        window_height &&
        toolbar_height &&
        window_height < toolbar_height) ||
      (toolbarposition === 'bottom' &&
        window_width &&
        toolbar_width &&
        window_width < toolbar_width)
        ? 'flex-start'
        : 'center'
    };
    flex-direction: ${toolbarposition === 'right' ? 'column' : 'row'};
    

  }
  &.toggle-show-control-box {
    width: 100%;
    height: 22px;
    overflow:hidden;
    padding-top: 6px;
  }
  &.show-control-btn-wrapper {
   
    width: 100%;
    padding: 0 40px;
    max-width: 842px;
    height: 88px;
    position:absolute;
    bottom: 0;
    margin: auto;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 10;
  }
  &.control-wrapper-1 {
    width: calc(100% - 2px);
    position: absolute;
    left: 1px;
    top: 1px;
  }
`
);

export const IconButton = muiStyled(MuiIconButton)(
  () => `
  
  &.show-control-box-btn {
    border: 1px solid #eeeeee;
    border-radius: 2px;
    box-shadow: none;
    &:hover {
      background: none;
    }
    &.border-none {
      border: 0 none;
    }
    &.btn-type-1 {
      width: 60px;
      height: 60px;
      background: #EEEEEE;
      border-radius: 50%;
    }
  }
  
  &.hide-control-box-btn {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0;
    justify-content: flex-start;
    padding-left: 37px;
    
  }
  &.rotate-180 {
    transform: rotate(180deg);
  }
`
);
