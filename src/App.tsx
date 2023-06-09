import { Box, Button, CssBaseline } from "@mui/material";
import { useMemo, useRef } from "react";
import sampleImage from "../samples/highres-portrait.jpeg";
import { ImageEditor, ImageEditorProps } from "./ImageEditor";

let boilerplates = [
  {
    id: 1,
    contents: "test",
  },
  {
    id: 2,
    contents: "test2",
  },
];

function App() {
  const boilerplate: ImageEditorProps["boilerplate"] = useMemo(
    () => ({
      onLoadBoilerplate: async () => {
        return boilerplates;
      },
      onSaveBoilerplate: async (contents: string) => {
        return;
      },
      onDeleteBoilerplate: async (id: number) => {
        boilerplates = boilerplates.filter((b) => b.id !== id);
      },
    }),
    []
  );

  const editorRef = useRef<HTMLElement>(null);

  const onClickSave = async () => {
    const blob = await editorRef.current?.toBlob();
    console.log(blob);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <ImageEditor
          ref={editorRef}
          imageUrl={sampleImage}
          boilerplate={boilerplate}
          touch={false}
          toolbarPosition="bottom"
          leadingItems={<Button onClick={onClickSave}>save</Button>}
        />
      </Box>
    </>
  );
}

export default App;
