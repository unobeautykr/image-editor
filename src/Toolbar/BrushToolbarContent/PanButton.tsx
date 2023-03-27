import { ToolbarButton } from "../ToolbarButton";
import { useTool } from "~/ImageEditor";
import { ToolName } from "~/EditorCore";
import { PanToolIcon } from "~/icons/PanToolIcon";

export function PanButton() {
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.PAN;

  const onClick = (e) => {
    setTool(ToolName.PAN);
  };

  return (
    <ToolbarButton selected={selected} Icon={PanToolIcon} onClick={onClick} />
  );
}
