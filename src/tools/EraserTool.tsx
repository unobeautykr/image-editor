import { ToolBase } from "./ToolBase";
import { fabric } from "fabric";

// http://fabricjs.com/fabric-intro-part-4#free_drawing
export class EraserTool extends ToolBase {
  constructor(core, config) {
    super(core, config);

    this.onPathCreated = (e) => {
      const path = e.path;
      path.selectable = false;
      path.hoverCursor = "default";
    };
  }

  onSelect() {
    this.c.isDrawingMode = true;
    this.c.freeDrawingBrush = new fabric.EraserBrush(this.c);
    this.c.freeDrawingBrush.width = this.config.thickness * 4 / this.core.zoomMin;
    this.c.on("path:created", this.onPathCreated);
  }

  onDeselect() {
    this.c.isDrawingMode = false;
    this.c.off("path:created", this.onPathCreated);
  }
}
