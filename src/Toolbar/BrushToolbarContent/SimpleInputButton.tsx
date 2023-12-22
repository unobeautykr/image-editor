import { useState, useCallback } from 'react';
import { Popover, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import { SimpleInputToolIcon } from '~/icons/SimpleInputToolIcon';
import { useImageEditor } from '~/ImageEditor';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { BoilerplateDialog } from '../BoilerplateDialog';
import { BoilerplateData } from '~/types';
import { ReactComponent as IconBookmark } from '~/assets/icons/update_icon/ic_bookmark_get.svg';

const ToolbarButton = styled(_ToolbarButton)<{}>(
  () => `
  &.inner-btn {
    gap: 10px !important;
    &.svg-20 {
      svg,path {
        width: 20px;
        height: 20px;
      }
    }
    &.flex-row {
      flex-direction: row !important;
    }
    &.flex-column {
      flex-direction: column !important;
    }
    .MuiTypography-root {
      background: ${grey[200]};
      border-radius: 2px;
      padding: 0 6px;
      line-height: 18px;
    }
  }
`
);

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
                vertical: -13,
                horizontal: 'left',
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
                horizontal: 'left',
              }
            : {
                vertical: 'center',
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
            } svg-20`}
            Icon={IconBookmark}
            onClick={onClickBoilerplate}
            disableToolbar={true}
            tooltip={'자주쓰는 문구'}
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
