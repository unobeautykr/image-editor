import {
  Dialog as MuiDialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton as MuiIconButton,
  List as MuiList,
  ListItem as MuiListItem,
  Box as MuiBox,
  Button as MuiButton,
  styled,
} from '@mui/material';

export const Dialog = styled(MuiDialog)(
  () => `
  .MuiDialog-paper {
    max-width: 660px;
    min-height: 480px;
  }
`
);

export const Button = styled(MuiButton)(
  () => `
  width: 100%;
  height: 100%;
  padding: 0;
`
);

export const DialogTitle = styled(MuiDialogTitle)(
  () => `
  font-size: 15px;
  font-weight: 700;
  line-height: 21.72px;

  border-bottom: 1px solid #DEE2EC;
  display: flex;
  justify-content: space-between;

`
);

export const DialogContent = styled(MuiDialogContent)(
  () => `
  padding: 3px 7px;
`
);

export const IconButton = styled(MuiIconButton)(
  () => `
  padding: 0;
  

  &.delete-btn {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`
);

export const List = styled(MuiList)(
  () => `
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
`
);

export const ListItem = styled(MuiListItem)(
  () => `
  padding: 0;
  width: 106px;
  height: 106px;
`
);

export const Box = styled(MuiBox)(
  () => `
  &.image-item {
    width: 106px;
    height: 106px;
    background: #EAEAEA;
    display: inline-flex;
    justify-content: center;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
);
