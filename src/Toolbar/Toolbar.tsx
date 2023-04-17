import { useImageEditor } from "../ImageEditor";
import { ReactNode, useEffect, useState } from "react";
import { BrushToolbarContent } from "./BrushToolbarContent/BrushToolbarContent";
import { TextToolbarContent } from "./TextToolbarContent/TextToolbarContent";
import { ImageToolbarContent } from "./ImageToolbarContent/ImageToolbarContent";
import { EditorCore } from "../EditorCore";
import { grey } from "@mui/material/colors";
import { Box, Paper } from "@mui/material";

export function Toolbar({ leadingItems }: { leadingItems: ReactNode }) {
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
          display: "flex",
          overflow: "auto",
          backgroundColor: grey[50],
          alignItems: "center",
          gap: 1,
          ...(toolbarPosition === "right" && {
            flexDirection: "column",
            width: 88,
            py: 4,
          }),
          ...(toolbarPosition === "bottom" && {
            flexDirection: "row",
            height: 88,
            px: 4,
          }),
        }}
      >
        {leadingItems && (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              ...(toolbarPosition === "right" && {
                flexDirection: "column",
              }),
              ...(toolbarPosition === "bottom" && {
                flexDirection: "row",
              }),
            }}
          >
            {leadingItems}
          </Box>
        )}
        <Box
          sx={{
            display: "grid",
            color: "black",
            gap: 3,
            ...(toolbarPosition === "right" && {
              gridTemplateRows: `404px 88px 128px`,
            }),
            ...(toolbarPosition === "bottom" && {
              gridTemplateColumns: `404px 88px 128px`,
            }),
          }}
        >
          {mode === EditorCore.Mode.BRUSH && <BrushToolbarContent />}
          {mode === EditorCore.Mode.TEXT && <TextToolbarContent />}
          {mode === EditorCore.Mode.IMAGE && <ImageToolbarContent />}
        </Box>
      </Paper>
    </Box>
  );
}
