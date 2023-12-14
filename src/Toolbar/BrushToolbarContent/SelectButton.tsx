import { ToolbarButton } from '../ToolbarButton';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { SelectToolIcon } from '~/icons/SelectToolIcon';

export function SelectButton() {
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.SELECT;

  const onClick = (e: any) => {
    setTool(ToolName.SELECT);
  };

  return (
    <ToolbarButton
      selected={selected}
      Icon={SelectToolIcon}
      onClick={onClick}
      tooltip="선택"
    />
  );
}
