import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-undo.svg";

export function UndoIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
