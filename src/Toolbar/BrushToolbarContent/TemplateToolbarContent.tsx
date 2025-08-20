import { EditorCore } from '../../EditorCore';
import { useImageEditor, useTool } from '../../ImageEditor';
import { useEffect, useState } from 'react';
import { ToolbarContent } from '../ToolbarContent';
import { ToolbarButton } from '../ToolbarButton';
import { PanButton } from './PanButton';
import { TextButton } from './TextButton';
import { SelectButton } from './SelectButton';
import { UndoIcon } from '~/icons/UndoIcon';
import { RedoIcon } from '~/icons/RedoIcon';

export function TemplateToolbarContent() {
  const { core } = useImageEditor();

  const { tool } = useTool();
  const [, setConfig] = useState(tool ? core.getToolConfig(tool) : null);

  const [history, setHistory] = useState(core.getHistoryInfo());
  const [available, setAvailable] = useState(core.available);

  const onClickUndo = () => {
    core.undo();
  };

  const onClickRedo = () => {
    core.redo();
  };

  useEffect(() => {
    if (tool) {
      setConfig(core.getToolConfig(tool));
    }
  }, [core, tool]);

  useEffect(() => {
    return core.on(EditorCore.Event.AVAILABILITY_CHANGE, setAvailable);
  }, [core]);

  useEffect(() => {
    return core.on(EditorCore.Event.HISTORY_CHANGE, setHistory);
  }, [core]);

  return (
    <ToolbarContent
      leadingItems={
        <>
          <PanButton />
          <SelectButton />
          <TextButton />
        </>
      }
      // palette={
      //   <ColorPalette value={config?.color} onChange={onChangeToolColor} />
      // }
      trailingItems={
        <>
          <ToolbarButton
            disabled={!available || history.index <= 0}
            Icon={UndoIcon}
            onClick={onClickUndo}
            tooltip="실행취소"
          />
          <ToolbarButton
            disabled={!available || history.index >= history.histories - 1}
            Icon={RedoIcon}
            onClick={onClickRedo}
            tooltip="재실행"
          />
        </>
      }
    />
  );
}
