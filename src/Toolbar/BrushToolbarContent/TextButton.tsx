import { ToolName } from "~/EditorCore";
import { ToolbarButton } from "../ToolbarButton";
import { useImageEditor, useTool } from "~/ImageEditor";
import { TextToolIcon } from "~/icons/TextToolIcon";

export function TextButton() {
  const { core, touch } = useImageEditor();
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.TEXT;

  const onClick = (_: any) => {
    if (touch) {
      core.addText("text");
    } else {
      setTool(ToolName.TEXT);
    }
  };

  return (
    <>
      <ToolbarButton
        selected={selected}
        Icon={TextToolIcon}
        onClick={onClick}
        tooltip="텍스트"
      />
    </>
  );
}
