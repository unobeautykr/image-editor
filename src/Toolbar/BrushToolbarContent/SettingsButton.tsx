import {
  useState,
  ChangeEvent,
  MouseEventHandler,
  useEffect,
  useCallback,
} from 'react';
import { observer } from 'mobx-react';
import { debounce } from 'lodash';
import { ListItemText, ClickAwayListener, RadioGroup } from '@mui/material';
import {
  MenuList,
  MenuItem,
  Popper,
  Dialog,
  DialogContent,
  DialogTitle,
  Radio,
  Button,
  Stack,
  FormControlLabel,
  Switch,
} from './SettingsButton.styled';
import { ToolbarButton } from '../ToolbarButton';
import Icon from '~/icons/Icon';
import { useImageEditor } from '~/ImageEditor';
import toolbarSettings from '~/store/toolbarSettings';
import sampleTopImage from '~/assets/images/toolbar/type_1.png';
import sampleBottomImage from '~/assets/images/toolbar/type_2.png';

export interface SimpleDialogProps {
  onClose: () => void;
}

const PopupModal = observer((props: SimpleDialogProps) => {
  const { onClose } = props;
  const { toolbarVerticalPosition, changeToolbarVerticalPosition } =
    toolbarSettings;

  const [value, setValue] = useState<'bottom' | 'top'>(
    toolbarVerticalPosition!
  );

  useEffect(() => {
    if (value !== toolbarVerticalPosition) {
      setValue(toolbarVerticalPosition!);
    }
  }, [toolbarVerticalPosition]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value as 'bottom' | 'top');
  };

  const handleSave = () => {
    changeToolbarVerticalPosition(value);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={true}>
      <DialogTitle>
        툴바 위치 설정{' '}
        <Button variant="text" onClick={handleSave}>
          완료
        </Button>
      </DialogTitle>
      <DialogContent>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <Stack flexDirection={'row'} className="controller-wrapper">
            <Stack flexDirection={'column'} className="controller">
              <img
                src={sampleTopImage}
                alt="상단고정 미리보기"
                onClick={() => {
                  setValue('top');
                }}
              />
              <FormControlLabel
                value="top"
                labelPlacement="top"
                control={<Radio />}
                label="상단 고정"
              />
            </Stack>
            <Stack flexDirection={'column'} className="controller">
              <img
                src={sampleBottomImage}
                alt="하단고정 미리보기"
                onClick={() => {
                  setValue('bottom');
                }}
              />
              <FormControlLabel
                value="bottom"
                labelPlacement="top"
                control={<Radio />}
                label="하단 고정"
              />
            </Stack>
          </Stack>
        </RadioGroup>
      </DialogContent>
    </Dialog>
  );
});

export const SettingsButton = observer(() => {
  const { core, touch } = useImageEditor();
  const { toolbarVerticalPosition } = toolbarSettings;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [usePencil, setUsePencil] = useState(core.config.usePencil);
  const [arrowRef, setArrowRef] = useState<HTMLElement | null>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedToggle = useCallback(
    debounce((element: HTMLElement) => {
      setAnchorEl(element);
      setIsOpen((prev) => !prev);
    }, 100),
    []
  );

  const handleClick = (
    event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const element = event.currentTarget;
    debouncedToggle(element);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleClickTogglePencil = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setUsePencil(!target.checked);
    core.setUsePencil(!target.checked);
  };

  const handleOpenPopup: MouseEventHandler<HTMLElement> = (e) => {
    handleClose();
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const handleClockwise90 = () => {
    core.rotateBaseImage90();
  };

  const id = isOpen ? 'simple-popper' : undefined;

  return (
    <div>
      <ToolbarButton
        aria-describedby={id}
        Icon={() => <Icon variant="more" />}
        onClick={handleClick}
        onTouchEnd={handleClick}
        style={{ touchAction: 'none' }}
      />
      {anchorEl && (
        <Popper
          id={id}
          open={isOpen}
          disablePortal={false}
          anchorEl={anchorEl}
          placement={toolbarVerticalPosition === 'bottom' ? 'top' : 'bottom'}
          modifiers={[
            {
              name: 'flip',
              enabled: false,
              options: {
                altBoundary: true,
                rootBoundary: 'document',
                padding: 8,
              },
            },
            {
              name: 'offset',
              options: {
                offset: [0, 40],
              },
            },
            {
              name: 'arrow',
              enabled: true,
              options: {
                element: arrowRef,
              },
            },
          ]}
        >
          <>
            <span
              ref={setArrowRef}
              className="arrow"
              style={{ lineHeight: 0, zIndex: '10' }}
            >
              <Icon variant="arrow" width={14} height={12} />
            </span>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList>
                {touch && (
                  <>
                    <MenuItem>
                      <ListItemText>손가락으로 그리기</ListItemText>
                      <Switch
                        checked={!usePencil}
                        onChange={handleClickTogglePencil}
                      />
                    </MenuItem>
                    <MenuItem onClick={handleOpenPopup}>
                      <ListItemText>툴바 위치 설정</ListItemText>
                    </MenuItem>
                  </>
                )}
                <MenuItem onClick={handleClockwise90}>
                  <ListItemText>
                    <Stack gap={'8px'} flexDirection={'row'}>
                      90도 회전 <Icon variant="clockwise90" />
                    </Stack>
                  </ListItemText>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </>
        </Popper>
      )}
      {popupOpen && <PopupModal onClose={handleClosePopup} />}
    </div>
  );
});
