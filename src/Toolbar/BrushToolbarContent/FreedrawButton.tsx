import { ToolbarButton } from "../ToolbarButton";
import { FreedrawConfigView } from "./FreedrawConfigView";
import { ToolbarPopover } from "../ToolbarPopover";
import { useState } from "react";
import { useImageEditor, useTool } from "~/ImageEditor";
import { ToolName } from "~/EditorCore";
import { PenToolIcon } from "~/icons/PenToolIcon";

export function FreedrawButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { core } = useImageEditor();
  const { tool, setTool } = useTool();
  const [config, setConfig] = useState(core.getToolConfig(ToolName.FREEDRAW));
  const selected = tool === ToolName.FREEDRAW;

  const onClick = (e: any) => {
    if (selected) {
      setAnchorEl(e.currentTarget);
    } else {
      setTool(ToolName.FREEDRAW);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeConfig = (attr: any) => {
    const newConfig = core.updateToolConfig(ToolName.FREEDRAW, attr);
    setConfig(newConfig);
    handleClose();
  };

  return (
    <>
      <ToolbarButton
        selected={selected}
        Icon={PenToolIcon}
        onClick={onClick}
        tooltip="펜"
      />
      <ToolbarPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <FreedrawConfigView value={config} onChange={onChangeConfig} />
      </ToolbarPopover>
    </>
  );
}
