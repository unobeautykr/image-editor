import { ToolBase } from "./ToolBase";

export class SelectTool extends ToolBase {
  constructor(core: any, config = null) {
    super(core, config);
  }

  onDeselect() {
    this.c.discardActiveObject().renderAll();
  }
}
