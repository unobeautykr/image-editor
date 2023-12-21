import { ToolbarButton } from '../ToolbarButton';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { PanToolIcon } from '~/icons/PanToolIcon';

export function PanButton() {
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.PAN;

  const onClick = (e: any) => {
    setTool(ToolName.PAN);
  };

  return (
    <ToolbarButton
      disableToolbar={true}
      selected={selected}
      Icon={PanToolIcon}
      onClick={onClick}
      tooltip="이동"
    />
  );
}
