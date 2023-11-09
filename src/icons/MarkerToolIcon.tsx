import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-marker.svg";

export function MarkerToolIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
