import {
  ListItem,
  IconButton,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  LoadingIcon,
} from './ImageBoilerplateDialog.styled';

import CloseIcon from '@mui/icons-material/Close';
import Icon from '~/icons/Icon';

export function BoilerplateDialogItem({ bp, onSelect, onDelete }: any) {
  const onClickDelete = async (e: any) => {
    e.stopPropagation();
    onDelete(bp.id);
  };

  return (
    <ListItem>
      <Box className="image-item">
        <Button onClick={() => onSelect(bp.contents)}>
          {!bp.contents.thumbnailUrl ? (
            <LoadingIcon />
          ) : (
            <img src={bp.contents.thumbnailUrl} />
          )}
        </Button>
        <IconButton onClick={onClickDelete} className="delete-btn">
          <Icon variant="delete" />
        </IconButton>
      </Box>
    </ListItem>
  );
}

export function ImageBoilerplateDialog({
  open,
  boilerplates,
  onSelect,
  onClose,
  onDelete,
}: any) {
  const onSelectBoilerplate = (contents: any) => {
    onSelect(contents.originalUrl);
    onClose();
  };

  const onDeleteBoilerplate = async (id: any) => {
    onDelete(id);
  };

  return (
    <Dialog maxWidth="xs" onClose={onClose} open={open}>
      <DialogTitle>
        자주쓰는 이미지 불러오기
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <List>
          {boilerplates.map((bp: any) => (
            <BoilerplateDialogItem
              key={bp.id}
              bp={bp}
              onSelect={onSelectBoilerplate}
              onDelete={onDeleteBoilerplate}
            />
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
