import styled from 'styled-components';
import { useImageEditor } from '../../ImageEditor';
import { ToolbarContent } from '../ToolbarContent';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import Icon from '~/icons/Icon';

const ToolbarButton = styled(_ToolbarButton)<{
  $toolbarPosition?: 'bottom' | 'right';
}>(
  ({ $toolbarPosition }) => `
  &.delete-btn {
    margin-top: 16px;
  }
  &.save-library-btn {
    ${$toolbarPosition === 'bottom' ? 'width: 100%;' : ''}
    ${
      $toolbarPosition === 'right'
        ? 'height: 100%; display: flex !important; justify-content: center;'
        : ''
    }
  }
`
);

export function ImageToolbarContent() {
  const { core, boilerplate, toolbarPosition } = useImageEditor();
  if (!boilerplate)
    throw new Error(
      'ImageEditor boilerplate attr must be provided in the edit mode'
    );

  const onClickDelete = () => {
    core.deleteSelectedObject();
  };

  const onClickSave = async () => {
    if (!boilerplate?.[1]?.onSaveBoilerplate) {
      return;
    }
    const image = await core.saveImageAsBlob();
    await boilerplate[1].onSaveBoilerplate(image);
  };

  return (
    <ToolbarContent
      trailingItems={
        <>
          <ToolbarButton
            className="save-library-btn"
            tooltip={
              toolbarPosition === 'bottom' ? (
                '자주쓰는 이미지로 저장'
              ) : (
                <>
                  자주쓰는
                  <br />
                  이미지로 저장
                </>
              )
            }
            disableToolbar={true}
            Icon={() => <Icon variant="library_add" />}
            onClick={onClickSave}
            $toolbarPosition={toolbarPosition}
          />
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
