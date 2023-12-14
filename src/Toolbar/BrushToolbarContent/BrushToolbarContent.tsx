import { EditorCore } from '../../EditorCore';
import { useImageEditor, useTool } from '../../ImageEditor';
import { useEffect, useState } from 'react';
import { ColorPalette } from '../ColorPalette';
import { ToolbarContent } from '../ToolbarContent';
import { FreedrawButton } from './FreedrawButton';
import { ToolbarButton } from '../ToolbarButton';
import { PanButton } from './PanButton';
import { SelectButton } from './SelectButton';
import { MarkerButton } from './MarkerButton';
import { ImageButton } from './ImageButton';
import { TextButton } from './TextButton';
import { EraserButton } from './EraserButton';
import { SettingsButton } from './SettingsButton';
import { UndoIcon } from '~/icons/UndoIcon';
import { RedoIcon } from '~/icons/RedoIcon';

export function BrushToolbarContent() {
  const { core, touch } = useImageEditor();

  const { tool } = useTool();
  const [config, setConfig] = useState(tool ? core.getToolConfig(tool) : null);

  const [history, setHistory] = useState(core.getHistoryInfo());
  const [available, setAvailable] = useState(core.available);

  const onClickUndo = (e: any) => {
    core.undo();
  };

  const onClickRedo = (e: any) => {
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

  const onChangeToolColor = (c: any) => {
    const newConfig = core.updateToolConfig(tool, {
      color: c,
    });
    setConfig(newConfig);
  };

  return (
    <ToolbarContent
      leadingItems={
        <>
          <PanButton />
          <SelectButton />
          <FreedrawButton />
          <MarkerButton />
          <EraserButton />
          <TextButton />
          <ImageButton />
        </>
      }
      palette={
        <ColorPalette value={config?.color} onChange={onChangeToolColor} />
      }
      trailingItems={
        <>
          <ToolbarButton
            small
            disabled={!available || history.index <= 0}
            Icon={UndoIcon}
            onClick={onClickUndo}
            tooltip="실행취소"
          />

          <ToolbarButton
            small
            disabled={!available || history.index >= history.histories - 1}
            Icon={RedoIcon}
            onClick={onClickRedo}
            tooltip="재실행"
          />
          {touch && <SettingsButton />}
        </>
      }
    />
  );
}
