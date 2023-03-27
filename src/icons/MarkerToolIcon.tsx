import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-marker.svg";

export function MarkerToolIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
