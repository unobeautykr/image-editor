import { ToolBase } from './ToolBase';

export class TextTool extends ToolBase {
  constructor(core: any, config = null) {
    super(core, config);
  }

  private selected = false;

  onMouseDownBefore = (opt: any) => {
    this.selected = Boolean(this.c.getActiveObject());
  };

  onMouseDown = (opt: any) => {
    if (this.selected) return;

    const e = opt.e;

    const position = {
      x: e.clientX,
      y: e.clientY,
    };

    this.core.addText('text', position);
  };

  onSelect() {
    this.c.on('mouse:down:before', this.onMouseDownBefore);
    this.c.on('mouse:down', this.onMouseDown);
  }

  onDeselect() {
    this.c.off('mouse:down', this.onMouseDown);
    this.c.off('mouse:down:before', this.onMouseDownBefore);
  }
}
