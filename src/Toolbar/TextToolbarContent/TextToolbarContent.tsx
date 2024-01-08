import { Slider, Stack, styled } from '@mui/material';
import { useImageEditor } from '../../ImageEditor';
import { ColorPalette } from '../ColorPalette';
import { ToolbarContent } from '../ToolbarContent';
import TextDecreaseIcon from '@mui/icons-material/TextDecrease';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ReactComponent } from '~/assets/icons/update_icon/ic_Libraryadd.svg';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import { useCallback, useState } from 'react';
import { BoilerplateDialog } from '../BoilerplateDialog';
import { BoilerplateData } from '~/types';

const ToolbarButton = styled(_ToolbarButton)(
  ({ theme }) => `
  &.save-btn {
    svg, path {
      width: 20px;
      height: 20px;
    }
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
  const [openBoilerplate, setOpenBoilerplate] = useState(false);
  const [boilerplates, setBoilerplates] = useState<BoilerplateData[]>([]);

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
    await boilerplate.onSaveBoilerplate(core.getSelectedTextContents());
  };

  const onSelectBoilerplate = (message: string) => {
    core.changeSelectedTextMessage(message);
    setOpenBoilerplate(false);
  };

  const onDeleteBoilerplate = async (id: number) => {
    await boilerplate.onDeleteBoilerplate(id);
    setBoilerplates((bps) => bps.filter((b: any) => b.id !== id));
  };

  return (
    <>
      <ToolbarContent
        leadingItems={
          <>
            <SizeSlider value={size} onChange={onChangeSize} />
            <ToolbarButton
              className="save-btn"
              Icon={ReactComponent}
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
          <>
            <ToolbarButton
              tooltip={'삭제'}
              disableToolbar={true}
              Icon={DeleteForeverIcon}
              onClick={onClickDelete}
            />
          </>
        }
      />
      <BoilerplateDialog
        open={openBoilerplate}
        onClose={() => setOpenBoilerplate(false)}
        onSelect={onSelectBoilerplate}
        onDelete={onDeleteBoilerplate}
        boilerplates={boilerplates}
      />
    </>
  );
}
