import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function BoilerplateDialogItem({ bp, onSelect, onDelete }: any) {
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickMore = (e: any) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const onClickDelete = async (e: any) => {
    e.stopPropagation();
    closeMenu();
    onDelete(bp.id);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem button onClick={() => onSelect(bp.contents)}>
      <ListItemText primary={bp.contents} />
      <IconButton onClick={onClickMore}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        <MenuItem onClick={onClickDelete}>삭제</MenuItem>
      </Menu>
    </ListItem>
  );
}

export function BoilerplateDialog({
  open,
  boilerplates,
  onSelect,
  onClose,
  onDelete,
}: any) {
  const onSelectBoilerplate = (contents: any) => {
    onSelect(contents);
    onClose();
  };

  const onDeleteBoilerplate = async (id: any) => {
    onDelete(id);
  };

  return (
    <Dialog fullWidth maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle>상용구를 선택하세요</DialogTitle>
      <List sx={{ pt: 0 }}>
        {boilerplates.map((bp: any) => (
          <BoilerplateDialogItem
            key={bp.id}
            bp={bp}
            onSelect={onSelectBoilerplate}
            onDelete={onDeleteBoilerplate}
          />
        ))}
      </List>
    </Dialog>
  );
}
