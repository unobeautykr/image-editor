import { useState } from 'react';
import { Slider, Stack, styled } from '@mui/material';
import { useImageEditor } from '../../ImageEditor';
import { ColorPalette } from '../ColorPalette';
import { ToolbarContent } from '../ToolbarContent';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Icon from '~/icons/Icon';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';

const ToolbarButton = styled(_ToolbarButton)(
  () => `
  &.save-btn {
    svg, path {
      width: 20px;
      height: 20px;
    }
  }
  &.delete-btn {
    margin-top: 16px;
  }
`
);

const SizeSlider = ({ value, onChange }: any) => {
  const { toolbarPosition } = useImageEditor();

  return (
    <Stack
      spacing={2}
      direction={toolbarPosition === 'bottom' ? 'row' : 'column-reverse'}
      sx={{
        mb: 1,
        ...(toolbarPosition === 'bottom' && {
          width: 200,
        }),
        ...(toolbarPosition === 'right' && {
          height: 200,
        }),
      }}
      alignItems="center"
    >
      <TextDecreaseIcon />
      <Slider
        orientation={toolbarPosition === 'bottom' ? 'horizontal' : 'vertical'}
        value={value}
        onChange={onChange}
      />
      <TextIncreaseIcon />
    </Stack>
  );
};

export function TextToolbarContent() {
  const { core, boilerplate, toolbarPosition } = useImageEditor();
  if (!boilerplate)
    throw new Error(
      'ImageEditor boilerplate attr must be provided in the edit mode'
    );

  const [size, setSize] = useState(core.getSelectedTextSize());
  const [color, setColor] = useState(core.getSelectedTextColor());

  const onClickDelete = () => {
    core.deleteSelectedObject();
  };

  const onChangeSize = (e: any) => {
    const fontSize = e.target.value;
    core.changeSelectedTextSize(fontSize);
    setSize(fontSize);
  };

  const onChangeColor = (c: any) => {
    core.changeSelectedTextColor(c);
    setColor(c);
  };

  const onClickSave = async () => {
    await boilerplate[0].onSaveBoilerplate(core.getSelectedTextContents());
  };

  return (
    <>
      <ToolbarContent
        leadingItems={
          <>
            <SizeSlider value={size} onChange={onChangeSize} />
            <ToolbarButton
              className="save-btn"
              Icon={() => <Icon variant="library_add" />}
              onClick={onClickSave}
              tooltip={
                toolbarPosition === 'bottom' ? (
                  '자주쓰는 문구로 저장'
                ) : (
                  <>
                    자주쓰는 문구로 <br />
                    저장
                  </>
                )
              }
              disableToolbar={true}
            />
          </>
        }
        palette={<ColorPalette value={color} onChange={onChangeColor} />}
        trailingItems={
          <ToolbarButton
            className="delete-btn"
            tooltip={'삭제'}
            disableToolbar={true}
            Icon={DeleteForeverIcon}
            onClick={onClickDelete}
          />
        }
      />
    </>
  );
}
