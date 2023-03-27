import { SvgIcon } from "@mui/material";
import { ReactComponent } from "~/assets/icons/ic-editor-select.svg";

export function SelectToolIcon(props) {
  return <SvgIcon inheritViewBox component={ReactComponent} {...props} />;
}
