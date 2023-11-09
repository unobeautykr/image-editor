import { ToolbarButton } from "../ToolbarButton";
import { ToolbarPopover } from "../ToolbarPopover";
import { useState } from "react";
import { useImageEditor, useTool } from "~/ImageEditor";
import { ToolName } from "~/EditorCore";
import { MarkerConfigView } from "./MarkerConfigView";
import { MarkerToolIcon } from "~/icons/MarkerToolIcon";

export function MarkerButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { core } = useImageEditor();
  const { tool, setTool } = useTool();
  const [config, setConfig] = useState(core.getToolConfig(ToolName.MARKER));
  const selected = tool === ToolName.MARKER;

  const onClick = (e: any) => {
    if (selected) {
      setAnchorEl(e.currentTarget);
    } else {
      setTool(ToolName.MARKER);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeConfig = (configAttr: any) => {
    const newConfig = core.updateToolConfig(ToolName.MARKER, configAttr);
    setConfig(newConfig);
    handleClose();
  };

  return (
    <>
      <ToolbarButton
        selected={selected}
        Icon={MarkerToolIcon}
        onClick={onClick}
        tooltip="브러쉬"
      />
      <ToolbarPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MarkerConfigView value={config} onChange={onChangeConfig} />
      </ToolbarPopover>
    </>
  );
}
