import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-select.svg";

export function SelectToolIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
