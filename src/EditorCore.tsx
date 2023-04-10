import { fabric } from "fabric";
import { EraserTool } from "./tools/EraserTool";
import { FreedrawTool } from "./tools/FreedrawTool";
import { MarkerTool } from "./tools/MarkerTool";
import { PanTool } from "./tools/PanTool";
import { SelectTool } from "./tools/SelectTool";
import { TextTool } from "./tools/TextTool";

export const ToolName = {
  FREEDRAW: "FREEDRAW",
  SELECT: "SELECT",
  PAN: "PAN",
  TEXT: "TEXT",
  MARKER: "MARKER",
  ERASER: "ERASER",
};

export const PresetColor = {
  BLACK: "#000000",
  RED: "#d82735",
  YELLOW: "#ffcb35",
  GREEN: "#009e47",
  BLUE: "#0052a5",
};

const MIN_TEXT_SIZE = 6;
const MAX_TEXT_SIZE = 60;

const Event = {
  HISTORY_CHANGE: "history.change",
  AVAILABILITY_CHANGE: "availability.change",
  TOOL_CHANGE: "tool.change",
  MODE_CHANGE: "mode.change",
  TEXT_CHANGE: "text.change",
};

const Mode = {
  BRUSH: "BRUSH",
  TEXT: "TEXT",
  IMAGE: "IMAGE",
};

const ConfigName = {
  FREEDRAW: "FREEBRUSH",
  MARKER: "MARKER",
  ERASER: "ERASER",
  TEXT: "TEXT",
};

export class EditorCore extends EventTarget {
  static readonly Event = Event;
  static readonly Mode = Mode;
  static readonly ConfigName = ConfigName;

  public mode = EditorCore.Mode.BRUSH;
  public imageUrl: string;

  private _busy: boolean;
  private readonly zoomMin = 1;
  private readonly zoomMax = 2;
  private history = {
    index: -1,
    records: [],
  };
  private _isTraversingHistory = false;
  private touchEnabled: boolean;
  private c: fabric.Canvas | null = null;

  public tool = null;

  private tools = {
    [ToolName.FREEDRAW]: {
      class: FreedrawTool,
    },
    [ToolName.MARKER]: {
      class: MarkerTool,
    },
    [ToolName.ERASER]: {
      class: EraserTool,
    },
    [ToolName.PAN]: {
      class: PanTool,
    },
    [ToolName.SELECT]: {
      class: SelectTool,
    },
    [ToolName.TEXT]: {
      class: TextTool,
    },
  };

  constructor({
    imageUrl,
    touchEnabled,
  }: {
    imageUrl: string;
    touchEnabled: boolean;
  }) {
    super();

    this.config = this.fetchConfig();
    this._busy = true;
    this.imageUrl = imageUrl;

    this.touchEnabled = touchEnabled;
  }

  setCanvas(element: HTMLCanvasElement) {
    this.c = new fabric.Canvas(element, {
      selection: false,
    });

    const c = this.c;
    this.c.usePencil = this.touchEnabled ? this.config.usePencil : false;

    fabric.Image.fromURL(
      this.imageUrl,
      (oImg) => {
        if (!c.getElement()) return;
        oImg.erasable = false;
        this.busy = false;
        c.setBackgroundImage(oImg, null);
        this.fitCanvas();
        this.pushHistory();
        this.selectTool(this.fetchTool());

        this.c.on("touch:gesture", this.onGesture);
        this.c.on("mouse:up", this.onMouseUp);
        this.c.on("object:added", this.onObjectAdded);
        this.c.on("object:modified", this.onObjectModified);
        this.c.on("object:removed", this.onObjectRemoved);
        this.c.on("selection:created", this.onObjectSelected);
        this.c.on("selection:cleared", this.onObjectDeselected);
      },
      {
        crossOrigin: "anonymous",
      }
    );

    this.c.on("mouse:wheel", (opt) => {
      opt.e.preventDefault();
      opt.e.stopPropagation();

      const delta = opt.e.deltaY;
      this.zoom(
        { x: opt.e.offsetX, y: opt.e.offsetY },
        this.c.getZoom() * 0.999 ** delta
      );
    });

    this.onGesture = (opt) => {
      const e = opt.e;

      if (e.touches && e.touches.length === 2) {
        this.isDragging = false;

        const point = new fabric.Point(opt.self.x, opt.self.y);

        const touches = [];
        for (const t of e.touches) {
          touches.push({
            identifier: t.identifier,
            clientX: t.clientX,
            clientY: t.clientY,
          });
        }

        if (opt.self.state === "start") {
          this.zoomStartScale = this.c.getZoom();
          this.touches = touches;
          return;
        }

        if (this.lastPoint) {
          this.pan(point.x - this.lastPoint.x, point.y - this.lastPoint.y);
        }
        const zoom = this.zoomStartScale * (e.scale ?? opt.self.scale);
        this.zoom(point, zoom);

        this.lastPoint = point;
        this.touches = touches;
      }
    };

    this.onMouseUp = (opt) => {
      const e = opt.e;
      if (e.type === "touchend") {
        this.lastPoint = null;
        this.touches = null;
      }
    };

    this.onObjectAdded = (opt) => {
      if (opt.target.type === "path") {
        const path = opt.target;
        path.selectable = false;
        path.hoverCursor = "default";
      }

      this.c.getObjects("image").forEach((image) => {
        this.c.bringToFront(image);
      });

      this.c.getObjects("path").forEach((text) => {
        this.c.bringToFront(text);
      });

      this.c.getObjects("i-text").forEach((text) => {
        this.c.bringToFront(text);
      });

      if (this.isTraversingHistory) return;
      this.pushHistory();
    };

    this.onObjectModified = (opt) => {
      if (this.isTraversingHistory) return;

      if (opt.target.type === "i-text" && opt.target.text.trim() === "") {
        const old = this.isTraversingHistory;
        this.isTraversingHistory = true;
        this.c.remove(opt.target);
        this.isTraversingHistory = old;
      }

      this.pushHistory();
    };

    this.onObjectRemoved = (opt) => {
      if (this.isTraversingHistory) return;
      this.pushHistory();
    };

    this.onObjectSelected = (opt) => {
      const selected = opt.selected[0];

      switch (selected.type) {
        case "i-text":
          this._dispatch(EditorCore.Event.MODE_CHANGE, EditorCore.Mode.TEXT);
          return;
        case "image":
          this._dispatch(EditorCore.Event.MODE_CHANGE, EditorCore.Mode.IMAGE);
          return;
        default:
          throw new Error(`object type ${selected.type} selected`);
      }
    };

    this.onObjectDeselected = (opt) => {
      this._dispatch(EditorCore.Event.MODE_CHANGE, EditorCore.Mode.BRUSH);
    };
  }

  zoom(point, targetZoom) {
    const zoom = Math.max(this.zoomMin, Math.min(this.zoomMax, targetZoom));

    this.c.zoomToPoint(point, zoom);
    this.adjustPan();
  }

  pan(x, y) {
    this.c.relativePan({ x, y });
    this.adjustPan();
  }

  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  adjustPan() {
    const vpt = this.c.viewportTransform;
    const zoom = this.c.getZoom();

    const offset = {
      x: (this.c.getWidth() * (1 / this.zoomMin - 1)) / 2,
      y: (this.c.getHeight() * (1 / this.zoomMin - 1)) / 2,
    };

    const frameSize = {
      width:
        (offset.x + this.c.backgroundImage.left) * 2 +
        this.c.backgroundImage.width,
      height:
        (offset.y + this.c.backgroundImage.top) * 2 +
        this.c.backgroundImage.height,
    };

    const offsetBoundary = {
      x: {
        min: this.c.getWidth() + (offset.x - frameSize.width) * zoom,
        max: offset.x * zoom,
      },
      y: {
        min: this.c.getHeight() + (offset.y - frameSize.height) * zoom,
        max: offset.y * zoom,
      },
    };

    vpt[4] = this.clamp(vpt[4], offsetBoundary.x.min, offsetBoundary.x.max);
    vpt[5] = this.clamp(vpt[5], offsetBoundary.y.min, offsetBoundary.y.max);

    this.c.setViewportTransform(vpt);
  }

  detach() {
    if (this.c) {
      this.c.dispose();
      this.tool = null;
    }
  }

  getToolConfig(toolId) {
    switch (toolId) {
      case ToolName.FREEDRAW:
        return this.config.freedraw;
      case ToolName.MARKER:
        return this.config.marker;
      case ToolName.ERASER:
        return this.config.eraser;
      default:
        return null;
    }
  }

  selectTool(toolId) {
    if (!this.available) return;

    const config = this.getToolConfig(toolId);
    const newTool = new this.tools[toolId].class(this, config);

    const old = this.tool;
    old?.instance.onDeselect?.();

    this.tool = { name: toolId, instance: newTool };

    newTool.onSelect?.();

    if (old?.type !== newTool) {
      this._dispatch(EditorCore.Event.TOOL_CHANGE, toolId);
    }

    this.cacheTool();
  }

  updateToolConfig(toolId, attr) {
    const old = this.getToolConfig(toolId);
    const newConfig = Object.assign({}, old, attr);

    switch (toolId) {
      case ToolName.FREEDRAW:
        this.config.freedraw = newConfig;
        break;
      case ToolName.MARKER:
        this.config.marker = newConfig;
        break;
      case ToolName.ERASER:
        this.config.eraser = newConfig;
        break;
      default:
        throw new Error(`Invalid toolId ${toolId}`);
    }

    if (this.tool.name === toolId) {
      this.selectTool(toolId);
    }

    this.cacheConfig();

    return newConfig;
  }

  setContainerSize(size) {
    this.containerSize = size;
    if (this.c) {
      this.fitCanvas();
    }
  }

  addImage(imageUrl) {
    if (!this.available) return;
    this.busy = true;
    this.selectTool(ToolName.SELECT);
    fabric.Image.fromURL(
      imageUrl,
      (img) => {
        //i create an extra var for to change some image properties
        this.c.add(img);
        this.c.centerObject(img);
        this.c.setActiveObject(img);
        img.erasable = false;
        this.busy = false;
      },
      {
        crossOrigin: "anonymous",
      }
    );
  }

  calcTextSize(fontSize) {
    return (
      (MIN_TEXT_SIZE + (fontSize / 100) * (MAX_TEXT_SIZE - MIN_TEXT_SIZE)) /
      this.zoomMin
    );
  }

  calcFontSize(textSize) {
    return (
      ((textSize * this.zoomMin - MIN_TEXT_SIZE) /
        (MAX_TEXT_SIZE - MIN_TEXT_SIZE)) *
      100
    );
  }

  addText(placeholder: string, position?: { x: number; y: number }) {
    if (!this.available) return;

    if (this.touchEnabled) {
      this.selectTool(ToolName.SELECT);
    }

    const text = new fabric.IText(placeholder);
    text.set("fill", this.config.text.color.code);
    text.set("fontSize", this.calcTextSize(this.config.text.fontSize));
    if (position) {
      const canvasSpace = this.c.getPointer({
        clientX: position.x,
        clientY: position.y,
      });
      text.set("left", canvasSpace.x);
      text.set("top", canvasSpace.y);
    } else {
      this.c.viewportCenterObject(text);
    }
    text.erasable = false;

    this.c.add(text);
    this.c.setActiveObject(text);
    text.selectAll();

    text.enterEditing();
  }

  async undo() {
    if (!this.available) return;
    if (this.history.index === 0) return;

    this.history.index -= 1;

    const history = this.history.records[this.history.index];

    await this.loadFromHistory(history);

    this._dispatchHistoryChange();
  }

  async redo() {
    if (!this.available) return;
    if (this.history.index >= this.history.records.length - 1) {
      return;
    }

    this.history.index += 1;

    const history = this.history.records[this.history.index];

    await this.loadFromHistory(history);

    this._dispatchHistoryChange();
  }

  async loadFromHistory(history) {
    this.isTraversingHistory = true;
    await new Promise((resolve, reject) => {
      try {
        fabric.util.enlivenObjects(
          history,
          (objects) => {
            this.c.remove(...this.c.getObjects());
            objects.forEach((o) => {
              this.c.add(o);
            });

            this.c.renderAll();
            resolve();
          },
          null
        );
      } catch (e) {
        reject(e);
      }
    });

    this.isTraversingHistory = false;
  }

  get isTraversingHistory() {
    return this._isTraversingHistory;
  }

  set isTraversingHistory(value) {
    this._isTraversingHistory = value;
    this._dispatchAvailbilityChange();
  }

  get busy() {
    return this._busy;
  }

  set busy(v) {
    this._busy = v;
    this._dispatchAvailbilityChange();
  }

  get available() {
    return !this._isTraversingHistory && !this.busy;
  }

  pushHistory() {
    const prevHistories = this.history.records.slice(0, this.history.index + 1);
    this.history.records = [...prevHistories, this.c.toObject().objects];
    this.history.index = this.history.records.length - 1;

    this._dispatchHistoryChange();
  }

  onHistoryChange(listener) {
    this.onHistoryChangeListener = listener;
  }

  onAvailabilityChange(listener) {
    this.onAvailabilityChangeListener = listener;
  }

  on(eventName, listener) {
    const wrapper = (e) => {
      listener(e.detail);
    };

    this.addEventListener(eventName, wrapper);

    return () => {
      this.removeEventListener(eventName, wrapper);
    };
  }

  getHistoryInfo() {
    return {
      index: this.history.index,
      histories: this.history.records.length,
    };
  }

  _dispatch(eventName, data) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail: data,
      })
    );
  }

  _dispatchHistoryChange() {
    this._dispatch(EditorCore.Event.HISTORY_CHANGE, this.getHistoryInfo());
  }

  _dispatchAvailbilityChange() {
    this._dispatch(EditorCore.Event.AVAILABILITY_CHANGE, this.available);
  }

  fitCanvas() {
    if (!this.c.backgroundImage) return;
    if (!this.containerSize) return;

    const zoomMin = Math.min(
      1,
      Math.min(
        this.containerSize.width / this.c.backgroundImage.width,
        this.containerSize.height / this.c.backgroundImage.height
      )
    );

    this.c.setWidth(this.containerSize.width);
    this.c.setHeight(this.containerSize.height);
    this.c.backgroundImage.center();

    const clipPath = new fabric.Rect({
      width: this.c.backgroundImage.width,
      height: this.c.backgroundImage.height,
      top: this.c.backgroundImage.top,
      left: this.c.backgroundImage.left,
    });
    this.c.clipPath = clipPath;

    this.zoomMin = zoomMin;
    this.zoom(
      { x: this.containerSize.width / 2, y: this.containerSize.height / 2 },
      zoomMin
    );
  }

  getDataUrl(format) {
    const originalTransform = this.c.viewportTransform;
    this.c.viewportTransform = fabric.iMatrix.slice(0);
    const dataUrl = this.c.toDataURL({
      format: format.toLowerCase() === "png" ? "png" : "jpeg",
      width: this.c.clipPath.width,
      height: this.c.clipPath.height,
      left: this.c.clipPath.left,
      top: this.c.clipPath.top,
    });
    this.c.viewportTransform = originalTransform;
    return dataUrl;
  }

  async toBlob() {
    const originalTransform = this.c.viewportTransform;
    this.c.viewportTransform = fabric.iMatrix.slice(0);
    const blob = new Promise((res, rej) => {
      this.c.toBlob(
        (blob) => {
          if (!blob) {
            rej(new Error("Cannot create blob"));
            return;
          }

          res(blob);
        },
        {
          width: this.c.clipPath.width,
          height: this.c.clipPath.height,
          left: this.c.clipPath.left + 1,
          top: this.c.clipPath.top + 1,
        }
      );
    });
    try {
      this.busy = true;
      await blob;
      return blob;
    } finally {
      this.c.viewportTransform = originalTransform;
      this.busy = false;
    }
  }

  deleteSelectedObject() {
    this.c.remove(this.c.getActiveObject());
  }

  changeSelectedTextSize(fontSize) {
    const text = this.c.getActiveObject();
    text.set("fontSize", this.calcTextSize(fontSize));
    this.config.text.fontSize = fontSize;
    this.cacheConfig();
    this.c.requestRenderAll();
  }

  changeSelectedTextColor(c) {
    const text = this.c.getActiveObject();
    text.set("fill", c.code);
    this.config.text.color = c;
    this.cacheConfig();
    this.c.requestRenderAll();
  }

  changeSelectedTextMessage(message) {
    const text = this.c.getActiveObject();
    text.set("text", message);
    this.c.requestRenderAll();
  }

  getSelectedTextSize() {
    const text = this.c.getActiveObject();

    return this.calcFontSize(text.fontSize);
  }

  getSelectedTextColor() {
    const text = this.c.getActiveObject();

    if (Object.values(PresetColor).includes(text.fill)) {
      return {
        type: "preset",
        code: text.fill,
      };
    } else {
      return {
        type: "custom",
        code: text.fill,
      };
    }
  }

  getSelectedTextContents() {
    const text = this.c.getActiveObject();
    return text.text;
  }

  setUsePencil(use) {
    this.config.usePencil = use;
    this.c.usePencil = use;
    this.cacheConfig();
  }

  fetchConfig() {
    const storedConfigRaw = localStorage.getItem("editorConfig");
    const storedConfig = storedConfigRaw ? JSON.parse(storedConfigRaw) : null;

    return {
      freedraw: storedConfig?.freedraw ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: PresetColor.BLACK,
        },
      },
      marker: storedConfig?.marker ?? {
        thickness: 3,
        color: {
          type: "preset",
          code: PresetColor.BLACK,
        },
      },
      eraser: storedConfig?.eraser ?? {
        thickness: 3,
      },
      text: storedConfig?.text ?? {
        color: {
          type: "preset",
          code: PresetColor.BLACK,
        },
        fontSize: 40,
      },
      usePencil: storedConfig?.usePencil ?? true,
    };
  }

  fetchTool() {
    return localStorage.getItem("editorTool") ?? ToolName.PAN;
  }

  cacheConfig() {
    localStorage.setItem("editorConfig", JSON.stringify(this.config));
  }

  cacheTool() {
    localStorage.setItem("editorTool", this.tool.name);
  }

  isDirty() {
    return this.history.index > 0;
  }
}
