import { styled } from '@mui/material';
import { useImageEditor } from '../../ImageEditor';
import { ToolbarContent } from '../ToolbarContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';

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

  return (
    <ToolbarContent
      trailingItems={
        <>
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
