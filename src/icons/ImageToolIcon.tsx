import { SvgIcon, SvgIconProps } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-image.svg";

export function ImageToolIcon(props: SvgIconProps) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
