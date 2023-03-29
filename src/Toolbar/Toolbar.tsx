import { useImageEditor } from "../ImageEditor";
import { useEffect, useState } from "react";
import { BrushToolbarContent } from "./BrushToolbarContent/BrushToolbarContent";
import { TextToolbarContent } from "./TextToolbarContent/TextToolbarContent";
import { ImageToolbarContent } from "./ImageToolbarContent/ImageToolbarContent";
import { EditorCore } from "../EditorCore";
import { grey } from "@mui/material/colors";
import { Box, Paper } from "@mui/material";

export function Toolbar() {
  const { core, toolbarPosition } = useImageEditor();
  const [mode, setMode] = useState(core.mode);

  useEffect(() => {
    return core.on(EditorCore.Event.MODE_CHANGE, setMode);
  }, [core]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: toolbarPosition === "right" ? "column" : "row",
      }}
    >
      <Paper
        sx={{
          display: "grid",
          backgroundColor: grey[50],
          overflow: "auto",
          color: "black",
          gap: 3,
          ...(toolbarPosition === "right" && {
            gridTemplateRows: `404px 88px 128px`,
            width: 88,
            py: 4,
            px: 2,
          }),
          ...(toolbarPosition === "bottom" && {
            gridTemplateColumns: `404px 88px 128px`,
            height: 88,
            py: 2,
            px: 4,
          }),
        }}
      >
        {mode === EditorCore.Mode.BRUSH && <BrushToolbarContent />}
        {mode === EditorCore.Mode.TEXT && <TextToolbarContent />}
        {mode === EditorCore.Mode.IMAGE && <ImageToolbarContent />}
      </Paper>
    </Box>
  );
}
