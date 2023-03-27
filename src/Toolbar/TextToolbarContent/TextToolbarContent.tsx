import { Slider, Stack } from "@mui/material";
import { useImageEditor } from "../../ImageEditor";
import { ColorPalette } from "../ColorPalette";
import { ToolbarContent } from "../ToolbarContent";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextsmsIcon from "@mui/icons-material/Textsms";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToolbarButton } from "../ToolbarButton";
import { useCallback, useEffect, useState } from "react";
import { BoilerplateDialog } from "../BoilerplateDialog";
import { BoilerplateData } from "~/types";

const SizeSlider = ({ value, onChange }) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ mb: 1, width: 200 }}
      alignItems="center"
    >
      <TextDecreaseIcon />
      <Slider aria-label="Volume" value={value} onChange={onChange} />
      <TextIncreaseIcon />
    </Stack>
  );
};

export function TextToolbarContent() {
  const { core, boilerplate } = useImageEditor();
  if (!boilerplate)
    throw new Error(
      "ImageEditor boilerplate attr must be provided in the edit mode"
    );

  const [size, setSize] = useState(core.getSelectedTextSize());
  const [color, setColor] = useState(core.getSelectedTextColor());
  const [openBoilerplate, setOpenBoilerplate] = useState(false);
  const [boilerplates, setBoilerplates] = useState<BoilerplateData[]>([]);

  // const loadBoilerplates = useCallback(async () => {
  //   const res = await api.getPenchartBoilerplates();
  //   const payload = await res.json();

  //   setBoilerplates(payload.data);
  // }, [api]);

  const load = useCallback(async () => {
    const data = await boilerplate.onLoadBoilerplate();
    setBoilerplates(data);
  }, [boilerplate]);

  useEffect(() => {
    load();
  }, [load]);

  const onClickDelete = () => {
    core.deleteSelectedObject();
  };

  const onChangeSize = (e) => {
    const fontSize = e.target.value;
    core.changeSelectedTextSize(fontSize);
    setSize(fontSize);
  };

  const onChangeColor = (c) => {
    core.changeSelectedTextColor(c);
    setColor(c);
  };

  const onClickBoilerplate = () => {
    setOpenBoilerplate((v) => !v);
  };

  const onClickSave = async () => {
    await boilerplate.onSaveBoilerplate(core.getSelectedTextContents());
    // await api.createPenchartBoilerplate(core.getSelectedTextContents());
    // sb.open("문구를 상용구로 저장했습니다.");
    load();
  };

  const onSelectBoilerplate = (message: string) => {
    core.changeSelectedTextMessage(message);
    setOpenBoilerplate(false);
  };

  const onDeleteBoilerplate = async (id: number) => {
    await boilerplate.onDeleteBoilerplate(id);
    // await api.deletePenchartBoilerplate(id);
    // sb.open("상용구를 삭제했습니다.");
    load();
  };

  return (
    <>
      <ToolbarContent
        leadingItems={
          <>
            <SizeSlider value={size} onChange={onChangeSize} />
            <ToolbarButton Icon={TextsmsIcon} onClick={onClickBoilerplate} />
            <ToolbarButton Icon={BookmarkAddIcon} onClick={onClickSave} />
          </>
        }
        palette={<ColorPalette value={color} onChange={onChangeColor} />}
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
