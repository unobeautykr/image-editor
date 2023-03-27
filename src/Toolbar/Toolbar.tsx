import { useImageEditor } from "../ImageEditor";
import { useEffect, useState } from "react";
import { BrushToolbarContent } from "./BrushToolbarContent/BrushToolbarContent";
import { TextToolbarContent } from "./TextToolbarContent/TextToolbarContent";
import { ImageToolbarContent } from "./ImageToolbarContent/ImageToolbarContent";
import { EditorCore } from "../EditorCore";
import { grey } from "@mui/material/colors";
import { Box, Paper } from "@mui/material";

export function Toolbar() {
  const { core, touch } = useImageEditor();
  const [mode, setMode] = useState(core.mode);

  useEffect(() => {
    return core.on(EditorCore.Event.MODE_CHANGE, setMode);
  }, [core]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          display: "grid",
          gridTemplateColumns: `404px 88px 128px`,
          backgroundColor: grey[50],
          py: 2,
          px: 4,
          overflow: "auto",
          color: "black",
          gap: 3,
        }}
      >
        {mode === EditorCore.Mode.BRUSH && <BrushToolbarContent />}
        {mode === EditorCore.Mode.TEXT && <TextToolbarContent />}
        {mode === EditorCore.Mode.IMAGE && <ImageToolbarContent />}
      </Paper>
    </Box>
  );
}
