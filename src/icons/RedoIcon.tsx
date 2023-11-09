import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-redo.svg";

export function RedoIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
