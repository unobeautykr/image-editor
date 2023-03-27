import { fabric } from "fabric";
import { ToolBase } from "./ToolBase";

// http://fabricjs.com/fabric-intro-part-4#free_drawing
export class FreedrawTool extends ToolBase {
  onSelect() {
    this.c.isDrawingMode = true;
    this.c.freeDrawingBrush = new fabric.PencilBrush(this.c);
    this.c.freeDrawingBrush.width =
      (this.config.thickness * 1) / this.core.zoomMin;
    this.c.freeDrawingBrush.color = this.config.color.code;
  }

  onDeselect() {
    this.c.isDrawingMode = false;
  }
}
