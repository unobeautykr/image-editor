import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-image.svg";

export function ImageToolIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
