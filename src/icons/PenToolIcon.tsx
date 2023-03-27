import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-pen.svg";

export function PenToolIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
