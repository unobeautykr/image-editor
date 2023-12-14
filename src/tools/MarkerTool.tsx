import { fabric } from 'fabric';
import { ToolBase } from './ToolBase';

// http://fabricjs.com/fabric-intro-part-4#free_drawing

function hexToRGBA(hex: any, alpha: any) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
export class MarkerTool extends ToolBase {
  onSelect() {
    this.c.isDrawingMode = true;
    this.c.freeDrawingBrush = new fabric.PencilBrush(this.c);
    this.c.freeDrawingBrush.width =
      (this.config.thickness * 8) / this.core.zoomMin;
    this.c.freeDrawingBrush.color = hexToRGBA(this.config.color.code, 0.4);
    this.c.isDrawingMode = true;
  }

  onDeselect() {
    this.c.isDrawingMode = false;
  }
}
