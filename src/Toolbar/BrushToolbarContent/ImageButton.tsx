import { styled } from '@mui/system';
import { grey } from '@mui/material/colors';
import { useImageEditor } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { ImageToolIcon } from '~/icons/ImageToolIcon';
import { Tooltip } from '@mui/material';

const ButtonLabel = styled('label')``;
const HiddenInput = styled('input')`
  display: none;
`;

export const ImageButton = ({ ...props }) => {
  const { core, toolbarPosition } = useImageEditor();

  const onClickUpload = (e: any) => {
    e.target.value = null;
  };

  const onChangeFiles = async (e: any) => {
    await Promise.all(
      [...e.target.files].map(
        (file) =>
          new Promise((resolve: any, reject) => {
            const reader = new FileReader();
            reader.onload = function (f: any) {
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
    <Tooltip
      title="이미지"
      arrow
      placement={toolbarPosition === 'right' ? 'left' : 'top'}
    >
      <ButtonLabel
        htmlFor="file-upload"
        sx={{
          display: 'flex',
          ':hover': {
            backgroundColor: grey[200],
          },
          p: 1.5,
          borderRadius: '50%',
          backgroundColor: grey[200],
          color: 'black',
        }}
      >
        <ImageToolIcon
          sx={{
            fontSize: 20,
            color: disabled ? 'action.disabled' : 'inherit',
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
    </Tooltip>
  );
};
