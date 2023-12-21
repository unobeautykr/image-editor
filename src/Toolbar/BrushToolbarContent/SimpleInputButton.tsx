import { useState, useCallback } from 'react';
import { Popover } from '@mui/material';
import { ToolbarButton } from '../ToolbarButton';
import { SimpleInputToolIcon } from '~/icons/SimpleInputToolIcon';
import { useImageEditor } from '~/ImageEditor';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { BoilerplateDialog } from '../BoilerplateDialog';
import { BoilerplateData } from '~/types';
import { ReactComponent as IconBookmark } from '~/assets/icons/update_icon/ic_bookmark_get.svg';

export function SimpleInputButton() {
  const { core, boilerplate, toolbarPosition } = useImageEditor();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openBoilerplate, setOpenBoilerplate] = useState(false);
  const [boilerplates, setBoilerplates] = useState<BoilerplateData[]>([]);
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.SIMPLE_INPUT;

  const load = useCallback(async () => {
    if (!boilerplate) return;
    const data = await boilerplate.onLoadBoilerplate();
    setBoilerplates(data);
  }, [boilerplate]);

  const onClick = (e: any) => {
    if (!boilerplate)
      throw new Error(
        'ImageEditor boilerplate attr must be provided in the edit mode'
      );
    setTool(ToolName.SIMPLE_INPUT);
    setAnchorEl(e.currentTarget);
  };

  const onSelectBoilerplate = (message: string) => {
    core.addText(message, undefined, true);
    setOpenBoilerplate(false);
    setTool(ToolName.PAN);
  };

  const onDeleteBoilerplate = async (id: number) => {
    boilerplate && (await boilerplate.onDeleteBoilerplate(id));
    setBoilerplates((bps) => bps.filter((b: any) => b.id !== id));
  };

  const onClickBoilerplate = async () => {
    await load();
    setOpenBoilerplate((v) => !v);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTool(ToolName.PAN);
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
            ? {
                vertical: -10,
                horizontal: 'center',
              }
            : {
                vertical: 'center',
                horizontal: -10,
              }
        }
        transformOrigin={
          toolbarPosition === 'bottom'
            ? {
                vertical: 'bottom',
                horizontal: 'center',
              }
            : {
                vertical: 'center',
                horizontal: 'right',
              }
        }
        PaperProps={{
          sx: {
            padding: '8px',
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
            Icon={IconBookmark}
            onClick={onClickBoilerplate}
            disableToolbar={true}
            tooltip={'상용구'}
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
      <BoilerplateDialog
        open={openBoilerplate}
        onClose={() => {
          setOpenBoilerplate(false);
        }}
        onSelect={onSelectBoilerplate}
        onDelete={onDeleteBoilerplate}
        boilerplates={boilerplates}
      />
    </div>
  );
}
