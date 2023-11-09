import { ListItemText, Menu, MenuItem, Switch } from "@mui/material";
import { useState } from "react";
import { ToolbarButton } from "../ToolbarButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useImageEditor } from "~/ImageEditor";

export function SettingsButton() {
  const { core } = useImageEditor();
  const [anchorEl, setAnchorEl] = useState(null);
  const [usePencil, setUsePencil] = useState(core.config.usePencil);
  const onClick = (e: any) => {
    setAnchorEl((current) => (current ? null : e.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickTogglePencil = (e: any) => {
    setUsePencil(!e.target.checked);
    core.setUsePencil(!e.target.checked);
  };

  return (
    <>
      <ToolbarButton small Icon={MoreHorizIcon} onClick={onClick} />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={onClickTogglePencil}>
          <ListItemText>손가락으로 그리기</ListItemText>
          <Switch checked={!usePencil} onChange={onClickTogglePencil} />
        </MenuItem>
      </Menu>
    </>
  );
}
