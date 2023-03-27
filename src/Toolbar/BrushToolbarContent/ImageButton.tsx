import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";
import { useImageEditor } from "~/ImageEditor";
import { ToolName } from "~/EditorCore";
import { ImageToolIcon } from "~/icons/ImageToolIcon";

const ButtonLabel = styled("label")``;
const HiddenInput = styled("input")`
  display: none;
`;

export const ImageButton = ({ ...props }) => {
  const { core } = useImageEditor();

  const onClickUpload = (e) => {
    e.target.value = null;
  };

  const onChangeFiles = async (e) => {
    await Promise.all(
      [...e.target.files].map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function (f) {
              core.addImage(f.target.result);
              resolve();
            };
            reader.readAsDataURL(file);
          })
      )
    );

    core.selectTool(ToolName.SELECT);
  };

  const disabled = false;

  return (
    <ButtonLabel
      htmlFor="file-upload"
      sx={{
        display: "flex",
        ":hover": {
          backgroundColor: grey[200],
        },
        p: 1.5,
        borderRadius: "50%",
        backgroundColor: grey[200],
        color: "black",
      }}
    >
      <ImageToolIcon
        sx={{
          fontSize: 20,
          color: disabled ? "action.disabled" : "inherit",
        }}
      />
      <HiddenInput
        id="file-upload"
        type="file"
        {...props}
        accept="image/*"
        onClick={onClickUpload}
        onChange={onChangeFiles}
      />
    </ButtonLabel>
  );
};
