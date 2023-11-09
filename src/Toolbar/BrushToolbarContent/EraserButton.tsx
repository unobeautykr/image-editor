import { ToolbarButton } from "../ToolbarButton";
import { ToolbarPopover } from "../ToolbarPopover";
import { useState } from "react";
import { useImageEditor, useTool } from "~/ImageEditor";
import { ToolName } from "~/EditorCore";
import { EraserConfigView } from "./EraserConfigView";
import { EraserToolIcon } from "~/icons/EraserToolIcon";

export function EraserButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { core } = useImageEditor();
  const { tool, setTool } = useTool();
  const [config, setConfig] = useState(core.getToolConfig(ToolName.ERASER));
  const selected = tool === ToolName.ERASER;

  const onClick = (e: any) => {
    if (selected) {
      setAnchorEl(e.currentTarget);
    } else {
      setTool(ToolName.ERASER);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeConfig = (config: any) => {
    const newConfig = core.updateToolConfig(ToolName.ERASER, config);
    setConfig(newConfig);
    handleClose();
  };

  return (
    <>
      <ToolbarButton
        selected={selected}
        Icon={EraserToolIcon}
        onClick={onClick}
        tooltip="지우개"
      />
      <ToolbarPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <EraserConfigView value={config} onChange={onChangeConfig} />
      </ToolbarPopover>
    </>
  );
}
