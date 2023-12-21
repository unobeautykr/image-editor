import { grey } from '@mui/material/colors';
import { useImageEditor } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { ImageToolIcon } from '~/icons/ImageToolIcon';
import { Tooltip, Typography as MuiTypography, styled } from '@mui/material';

const Typography = styled(MuiTypography)(
  () => `
  font-family: Apple SD Gothic Neo;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
`
);

const ButtonLabel = styled('label')`
  cursor: pointer;
`;
const HiddenInput = styled('input')`
  display: none;
`;

export const ImageButton = ({
  disableToolbar = true,
  tooltip = '이미지',
  ...props
}: {
  disableToolbar?: boolean;
  tooltip?: string;
}) => {
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

  return disableToolbar ? (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <ButtonLabel
        htmlFor="file-upload"
        sx={{
          display: 'flex',
          ':hover': {
            backgroundColor: grey[200],
          },
          p: 1.2,
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
      <Typography variant="body1">{tooltip}</Typography>
    </span>
  ) : (
    <Tooltip
      title={tooltip}
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
