import { ToolBase } from "./ToolBase";

// http://fabricjs.com/fabric-intro-part-5#pan_zoom
export class PanTool extends ToolBase {
  constructor(core, config = null) {
    super(core, config);

    this.touchPositions = {};

    this.onMouseDown = (opt) => {
      const e = opt.e;
      if (e.type === "touchstart") {
        this.isDragging = e.touches.length === 1;

        for (const touch of e.changedTouches) {
          this.touchPositions[touch.identifier] = {
            x: touch.clientX,
            y: touch.clientY,
          };
        }
      } else {
        this.isDragging = true;
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    };

    this.onMouseUp = (opt) => {
      const e = opt.e;
      if (e.type === "touchend") {
        for (const touch of e.changedTouches) {
          delete this.touchPositions[touch.identifier];
        }
      }
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.c.setViewportTransform(this.c.viewportTransform);
      this.isDragging = false;
    };

    this.onMouseMove = (opt) => {
      if (opt.e.type !== "mousemove") return;

      if (this.isDragging) {
        const e = opt.e;
        this.core.pan(e.clientX - this.lastPosX, e.clientY - this.lastPosY);
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    };

    this.onObjectSelected = (e) => {
      this.pausePanning = true;
    };

    this.onSelectionCleared = (e) => {
      this.pausePanning = false;
    };

    this.onTouchDrag = (opt) => {
      const e = opt.e;
      if (e.type !== "touchmove") return;

      if (this.isDragging) {
        if (e.touches.length > 1) return;

        for (const t of e.changedTouches) {
          const lastPos = this.touchPositions[t.identifier];
          if (!lastPos) return;

          this.core.pan(t.clientX - lastPos.x, t.clientY - lastPos.y);

          this.touchPositions[t.identifier] = {
            x: t.clientX,
            y: t.clientY,
          };
        }
      }
    };
  }

  onSelect() {
    this.c.on("mouse:down", this.onMouseDown);
    this.c.on("mouse:move", this.onMouseMove);
    this.c.on("mouse:up", this.onMouseUp);
    this.c.on("object:selected", this.onObjectSelected);
    this.c.on("selection:cleared", this.onSelectionCleared);
    this.c.on("touch:drag", this.onTouchDrag);
  }

  onDeselect() {
    this.c.off("mouse:down", this.onMouseDown);
    this.c.off("mouse:move", this.onMouseMove);
    this.c.off("mouse:up", this.onMouseUp);
    this.c.off("object:selected", this.onObjectSelected);
    this.c.off("selection:cleared", this.onSelectionCleared);
    this.c.off("touch:drag", this.onTouchDrag);
  }
}
