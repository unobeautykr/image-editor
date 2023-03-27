import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-move.svg";

export function PanToolIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
