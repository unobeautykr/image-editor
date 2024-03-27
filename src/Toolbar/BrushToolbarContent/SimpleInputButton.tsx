import { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { Popover } from '@mui/material';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import toolbarSettings from '~/store/toolbarSettings';
import { SimpleInputToolIcon } from '~/icons/SimpleInputToolIcon';
import { useImageEditor } from '~/ImageEditor';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { TextBoilerplateDialog } from '../TextBoilerplateDialog';
import { BoilerplateData } from '~/types';
import Icon from '~/icons/Icon';
import { ToolbarButton } from './SimpleInputButton.styled';
import { ImageBoilerplateDialog } from '../ImageBoilerplateDialog';

export const SimpleInputButton = observer(() => {
  const { core, boilerplate, toolbarPosition } = useImageEditor();
  const { toolbarVerticalPosition } = toolbarSettings;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openTextBoilerplate, setOpenTextBoilerplate] = useState(false);
  const [openImageBoilerplate, setOpenImageBoilerplate] = useState(false);
  const [textBoilerplates, setTextBoilerplates] = useState<BoilerplateData[]>(
    []
  );
  const [imageBoilerplates, setImageBoilerplates] = useState<BoilerplateData[]>(
    []
  );
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.SIMPLE_INPUT;

  const loadTextList = useCallback(async () => {
    if (!boilerplate) return;
    const data = await boilerplate[0].onLoadBoilerplate();
    setTextBoilerplates(data);
  }, [boilerplate]);

  const loadImageList = useCallback(async () => {
    if (!boilerplate) return;
    const data = await boilerplate[1].onLoadBoilerplate();
    setImageBoilerplates(data);
  }, [boilerplate]);

  const onClick = (e: any) => {
    if (!boilerplate)
      throw new Error(
        'ImageEditor boilerplate attr must be provided in the edit mode'
      );
    setTool(ToolName.SIMPLE_INPUT);
    setAnchorEl(e.currentTarget);
  };

  const onSelectTextBoilerplate = (message: string) => {
    core.addText(message, undefined, true);
    setOpenTextBoilerplate(false);
    setTool(ToolName.PAN);
  };

  const onDeleteTextBoilerplate = async (id: number) => {
    boilerplate && (await boilerplate[0].onDeleteBoilerplate(id));
    setTextBoilerplates((bps) => bps.filter((b: any) => b.id !== id));
  };

  const onClickTextBoilerplate = async () => {
    await loadTextList();
    setOpenTextBoilerplate((v) => !v);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTool(ToolName.PAN);
  };

  const onSelectImageBoilerplate = (url: string) => {
    core.addImage(url);
    setOpenImageBoilerplate(false);
    setTool(ToolName.PAN);
  };

  const onDeleteImageBoilerplate = async (id: number) => {
    boilerplate && (await boilerplate[1].onDeleteBoilerplate(id));
    setImageBoilerplates((bps) => bps.filter((b: any) => b.id !== id));
  };

  const onClickImageBoilerplate = async () => {
    await loadImageList();
    setOpenImageBoilerplate((v) => !v);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{ position: 'relative' }}>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={
          toolbarPosition === 'bottom'
            ? toolbarVerticalPosition === 'bottom'
              ? {
                  vertical: -15,
                  horizontal: 'left',
                }
              : {
                  vertical: 60,
                  horizontal: 'left',
                }
            : {
                vertical: 'top',
                horizontal: -20,
              }
        }
        transformOrigin={
          toolbarPosition === 'bottom'
            ? toolbarVerticalPosition === 'bottom'
              ? {
                  vertical: 'bottom',
                  horizontal: 'left',
                }
              : {
                  vertical: 'top',
                  horizontal: 'left',
                }
            : {
                vertical: 'top',
                horizontal: 'right',
              }
        }
        PaperProps={{
          sx: {
            background: 'none',
            boxShadow: 'none',
          },
        }}
      >
        <div
          style={
            toolbarPosition === 'bottom'
              ? {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }
              : {
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }
          }
        >
          <ToolbarButton
            className={`inner-btn ${
              toolbarPosition === 'bottom' ? 'flex-row' : 'flex-column'
            } svg-20 bg-grey`}
            Icon={() => <Icon variant="bookmark_text" />}
            onClick={onClickTextBoilerplate}
            disableToolbar={true}
            tooltip={'자주쓰는 문구'}
          />
          <ToolbarButton
            className={`inner-btn ${
              toolbarPosition === 'bottom' ? 'flex-row' : 'flex-column'
            } svg-20 bg-grey`}
            Icon={() => <Icon variant="bookmark_image" />}
            onClick={onClickImageBoilerplate}
            disableToolbar={true}
            tooltip={'자주쓰는 이미지'}
          />
        </div>
      </Popover>
      <ToolbarButton
        selected={selected}
        disableToolbar={true}
        Icon={SimpleInputToolIcon}
        onClick={onClick}
        tooltip="간편입력"
      />
      <TextBoilerplateDialog
        open={openTextBoilerplate}
        onClose={() => {
          setOpenTextBoilerplate(false);
        }}
        onSelect={onSelectTextBoilerplate}
        onDelete={onDeleteTextBoilerplate}
        boilerplates={textBoilerplates}
      />
      <ImageBoilerplateDialog
        open={openImageBoilerplate}
        onClose={() => {
          setOpenImageBoilerplate(false);
        }}
        onSelect={onSelectImageBoilerplate}
        onDelete={onDeleteImageBoilerplate}
        boilerplates={imageBoilerplates}
      />
    </div>
  );
});
