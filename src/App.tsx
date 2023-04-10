import { Box, Button, CssBaseline } from "@mui/material";
import { useMemo, useRef } from "react";
import sampleImage from "../samples/highres-portrait.jpeg";
import { ImageEditor, ImageEditorProps } from "./ImageEditor";

function App() {
  const boilerplate: ImageEditorProps["boilerplate"] = useMemo(
    () => ({
      onLoadBoilerplate: async () => {
        return [
          {
            id: 1,
            contents: "test",
          },
          {
            id: 2,
            contents: "test2",
          },
        ];
      },
      onSaveBoilerplate: async (contents: string) => {
        return;
      },
      onDeleteBoilerplate: async (id: number) => {
        return;
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
      <Button onClick={onClickSave}>save</Button>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <ImageEditor
          ref={editorRef}
          imageUrl={sampleImage}
          boilerplate={boilerplate}
          touch={false}
          toolbarPosition="right"
        />
      </Box>
    </>
  );
}

export default App;
