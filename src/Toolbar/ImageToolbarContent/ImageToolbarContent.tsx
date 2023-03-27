import { useImageEditor } from "../../ImageEditor";
import { ToolbarContent } from "../ToolbarContent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToolbarButton } from "../ToolbarButton";

export function ImageToolbarContent() {
  const { core } = useImageEditor();

  const onClickDelete = () => {
    core.deleteSelectedObject();
  };

  return (
    <ToolbarContent
      trailingItems={
        <>
          <ToolbarButton
            small
            Icon={DeleteForeverIcon}
            onClick={onClickDelete}
          />
        </>
      }
    />
  );
}
