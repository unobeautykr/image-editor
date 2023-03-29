import { Box, CssBaseline } from "@mui/material";
import { useMemo } from "react";
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
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <ImageEditor
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
