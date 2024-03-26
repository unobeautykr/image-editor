import { styled } from '@mui/material';
import { useImageEditor } from '../../ImageEditor';
import { ToolbarContent } from '../ToolbarContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import { Button } from '@mui/material';
import { downloadBlob } from '~/utils/fileUtil';

const ToolbarButton = styled(_ToolbarButton)(
  () => `
  &.delete-btn {
    margin-top: 16px;
  }
`
);

export function ImageToolbarContent() {
  const { core } = useImageEditor();

  const onClickDelete = () => {
    core.deleteSelectedObject();
  };

  const onClickSaveImage = async () => {
    const image = await core.saveImageAsBlob();
    if (image) {
      downloadBlob(image, 'changedImage.png');
    }
  };

  return (
    <ToolbarContent
      trailingItems={
        <>
          {/* <Button
            variant={'outlined'}
            color={'primary'}
            onClick={onClickSaveImage}
          >
            이미지 저장
          </Button> */}
          <ToolbarButton
            className="delete-btn"
            tooltip={'삭제'}
            disableToolbar={true}
            Icon={DeleteForeverIcon}
            onClick={onClickDelete}
          />
        </>
      }
    />
  );
}
