import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-redo.svg";

export function RedoIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
