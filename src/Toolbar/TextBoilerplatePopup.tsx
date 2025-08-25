import { MenuItem, ListItemText, IconButton } from '@mui/material';
import { observer } from 'mobx-react';
import CloseIcon from '@mui/icons-material/Close';
import { Menu, Box } from './TextBoilerplatePopup.styled';
import { useImageEditor } from '~/ImageEditor';
import { useMemo } from 'react';
import toolbarSettings from '~/store/toolbarSettings';

interface BoilerplatePopupItemProps {
  bp: any;
  onSelect: (contents: string) => void;
}

function BoilerplatePopupItem({ bp, onSelect }: BoilerplatePopupItemProps) {
  const onClickItem = () => {
    onSelect(bp.contents);
  };

  return (
    <MenuItem onClick={onClickItem} sx={{ pr: 1 }}>
      <ListItemText primary={bp.contents} />
    </MenuItem>
  );
}

interface TextBoilerplatePopupProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onSelect: (contents: string) => void;
  boilerplates: any[];
}

export const TextBoilerplatePopup = observer(
  ({
    anchorEl,
    open,
    onClose,
    onSelect,
    boilerplates,
  }: TextBoilerplatePopupProps) => {
    const { toolbarPosition } = useImageEditor();
    const { toolbarVerticalPosition } = toolbarSettings;

    const isBottom = useMemo(() => {
      return (
        toolbarPosition === 'bottom' && toolbarVerticalPosition === 'bottom'
      );
    }, [toolbarPosition]);

    const isTop = useMemo(() => {
      return toolbarPosition === 'bottom' && toolbarVerticalPosition === 'top';
    }, [toolbarPosition]);

    const isRight = useMemo(() => {
      return toolbarPosition === 'right';
    }, [toolbarPosition]);

    return (
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        anchorOrigin={{
          vertical: isRight ? 'center' : isTop ? 'bottom' : 'top',
          horizontal: isRight ? 'left' : 'center',
        }}
        transformOrigin={{
          vertical: isRight ? 'center' : isTop ? 'top' : 'bottom',
          horizontal: isRight ? 'right' : 'center',
        }}
        PaperProps={{
          sx: {
            marginTop: isRight
              ? '0'
              : isTop
              ? '38px'
              : isBottom
              ? '-24px'
              : '0',
            marginLeft: isRight ? '-36px' : '0',
            minWidth: 350,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          },
        }}
      >
        <Box className="boilerplate-header">
          고객정보 입력
          <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box className="boilerplate-list">
          {boilerplates.length === 0 ? (
            <MenuItem disabled>
              <ListItemText primary="저장된 문구가 없습니다" />
            </MenuItem>
          ) : (
            boilerplates.map((bp, index) => (
              <BoilerplatePopupItem
                key={`boiler-plate-${index}`}
                bp={bp}
                onSelect={onSelect}
              />
            ))
          )}
        </Box>
      </Menu>
    );
  }
);
