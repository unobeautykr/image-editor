import { ToolbarButton } from "../ToolbarButton";
import { useImageEditor } from "~/ImageEditor";
import { TextToolIcon } from "~/icons/TextToolIcon";

export function TextButton() {
  const { core } = useImageEditor();

  const onClick = (e) => {
    core.addText("text");
  };

  return (
    <>
      <ToolbarButton Icon={TextToolIcon} onClick={onClick} />
    </>
  );
}
