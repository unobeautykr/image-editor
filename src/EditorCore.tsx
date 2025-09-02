import { fabric } from 'fabric';
import { EraserTool } from './tools/EraserTool';
import { FreedrawTool } from './tools/FreedrawTool';
import { MarkerTool } from './tools/MarkerTool';
import { PanTool } from './tools/PanTool';
import { SelectTool } from './tools/SelectTool';
import { TextTool } from './tools/TextTool';
import { TimestampTool } from './tools/TimestampTool';

export const ToolName = {
  FREEDRAW: 'FREEDRAW',
  SELECT: 'SELECT',
  PAN: 'PAN',
  TEXT: 'TEXT',
  MARKER: 'MARKER',
  ERASER: 'ERASER',
  TIMESTAMP: 'TIMESTAMP',
  SIMPLE_INPUT: 'SIMPLE_INPUT',
};

export const PresetColor = {
  BLACK: '#000000',
  RED: '#d82735',
  YELLOW: '#ffcb35',
  GREEN: '#009e47',
  BLUE: '#0052a5',
};

const MIN_TEXT_SIZE = 6;
const MAX_TEXT_SIZE = 60;

const Event = {
  HISTORY_CHANGE: 'history.change',
  AVAILABILITY_CHANGE: 'availability.change',
  TOOL_CHANGE: 'tool.change',
  MODE_CHANGE: 'mode.change',
  TEXT_CHANGE: 'text.change',
};

const Mode = {
  BRUSH: 'BRUSH',
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
};

const ConfigName = {
  FREEDRAW: 'FREEBRUSH',
  MARKER: 'MARKER',
  ERASER: 'ERASER',
  TEXT: 'TEXT',
};

export class EditorCore extends EventTarget {
  static readonly Event = Event;
  static readonly Mode = Mode;
  static readonly ConfigName = ConfigName;

  public mode = EditorCore.Mode.BRUSH;
  public imageUrl: string;

  private _busy: boolean;
  private zoomMin: number = 1;
  private zoomMax: number = 2;
  private history = {
    index: -1,
    records: [],
  };
  private _isTraversingHistory = false;
  private touchEnabled: boolean;
  private c: fabric.Canvas | null | any = null;

  public tool: any = null;

  config: any;
  isDragging: any;
  zoomStartScale: any;
  touches: any;
  lastPoint: any;

  onMouseWheel?: (opt: any) => void;
  onMouseUp?: (opt: any) => void;
  onGesture?: (opt: any) => void;
  onObjectAdded?: (opt: any) => void;
  onObjectModified?: (opt: any) => void;
  onObjectRemoved?: (opt: any) => void;
  onObjectSelected?: (opt: any) => void;
  onObjectSelectionUpdated?: (opt: any) => void;
  onObjectDeselected?: (opt: any) => void;
  onEraseEnd?: (opt: any) => void;
  containerSize: any;
  onHistoryChangeListener: any;
  onAvailabilityChangeListener: any;

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
    [ToolName.TIMESTAMP]: {
      class: TimestampTool,
    },
    [ToolName.SIMPLE_INPUT]: {
      class: SelectTool,
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
      (oImg: any) => {
        if (!c.getElement()) return;
        oImg.erasable = false;
        this.busy = false;
        c.setBackgroundImage(oImg, null);
        this.fitCanvas();
        this.selectTool(this.fetchTool());

        if (this.history.index < 0) {
          this.pushHistory();
        } else {
          const history = this.history.records[this.history.index];
          this.loadFromHistory(history);
        }

        this.c.on('touch:gesture', this.onGesture);
        this.c.on('mouse:up', this.onMouseUp);
        this.c.on('mouse:wheel', this.onMouseWheel);
        this.c.on('object:added', this.onObjectAdded);
        this.c.on('object:modified', this.onObjectModified);
        this.c.on('object:removed', this.onObjectRemoved);
        this.c.on('selection:created', this.onObjectSelected);
        this.c.on('selection:updated', this.onObjectSelectionUpdated);
        this.c.on('selection:cleared', this.onObjectDeselected);
        this.c.on('erasing:end', this.onEraseEnd);
      },
      {
        crossOrigin: 'anonymous',
      }
    );

    this.onMouseWheel = (opt: any) => {
      opt.e.preventDefault();
      opt.e.stopPropagation();

      const delta = opt.e.deltaY;
      this.zoom(
        { x: opt.e.offsetX, y: opt.e.offsetY },
        this.c.getZoom() * 0.999 ** delta
      );
    };

    this.onGesture = (opt: any) => {
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

        if (opt.self.state === 'start') {
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

    this.onMouseUp = (opt: any) => {
      const e = opt.e;
      if (e.type === 'touchend') {
        this.lastPoint = null;
        this.touches = null;
      }
    };

    this.onObjectAdded = (opt: any) => {
      if (opt.target.type === 'path') {
        const path = opt.target;
        path.selectable = false;
        path.hoverCursor = 'default';
      }

      this.c.getObjects('image').forEach((image: any) => {
        this.c.bringToFront(image);
      });

      this.c.getObjects('path').forEach((text: any) => {
        this.c.bringToFront(text);
      });

      this.c.getObjects('i-text').forEach((text: any) => {
        this.c.bringToFront(text);
      });

      if (this.isTraversingHistory) return;
      this.pushHistory();
    };

    this.onObjectModified = (opt: any) => {
      if (this.isTraversingHistory) return;
      if (opt.target.type === 'i-text' && opt.target.text.trim() === '') {
        const old = this.isTraversingHistory;
        this.isTraversingHistory = true;
        this.c.remove(opt.target);
        this.isTraversingHistory = old;
      }
      this.pushHistory();
    };

    this.onEraseEnd = (_opt: any) => {
      if (this.isTraversingHistory) return;
      this.pushHistory();
    };

    this.onObjectRemoved = (_opt: any) => {
      if (this.isTraversingHistory) return;
      this.pushHistory();
    };

    this.onObjectSelected = (opt: any) => {
      const selected = opt.selected[0];
      switch (selected.type) {
        case 'i-text':
          if (this.tool.name === ToolName.PAN) {
            this.selectTool(ToolName.SELECT);
          }
          return this._dispatch(
            EditorCore.Event.MODE_CHANGE,
            EditorCore.Mode.TEXT
          );
        case 'image':
          if (this.tool.name === ToolName.PAN) {
            this.selectTool(ToolName.SELECT);
          }
          return this._dispatch(
            EditorCore.Event.MODE_CHANGE,
            EditorCore.Mode.IMAGE
          );
        default:
          throw new Error(`object type ${selected.type} selected`);
      }
    };

    this.onObjectSelectionUpdated = (opt: any) => {
      const selected = opt.selected[0];
      switch (selected.type) {
        case 'i-text':
          if (this.tool.name === ToolName.PAN) {
            this.selectTool(ToolName.SELECT);
          }
          return this._dispatch(
            EditorCore.Event.MODE_CHANGE,
            EditorCore.Mode.TEXT
          );
        case 'image':
          if (this.tool.name === ToolName.PAN) {
            this.selectTool(ToolName.SELECT);
          }
          return this._dispatch(
            EditorCore.Event.MODE_CHANGE,
            EditorCore.Mode.IMAGE
          );
      }
    };

    this.onObjectDeselected = (_opt: any) => {
      this._dispatch(EditorCore.Event.MODE_CHANGE, EditorCore.Mode.BRUSH);
    };
  }

  zoom(point: any, targetZoom: any) {
    const zoom = Math.max(this.zoomMin, Math.min(this.zoomMax, targetZoom));
    this.c.zoomToPoint(point, zoom);
    this.adjustPan();
  }

  pan(x: any, y: any) {
    this.c.relativePan({ x, y });
    this.adjustPan();
  }

  clamp(value: any, min: any, max: any) {
    return Math.min(Math.max(value, min), max);
  }

  adjustPan() {
    const vpt = this.c.viewportTransform;
    const zoom = this.c.getZoom();
    const image = this.c.backgroundImage;

    if (!image) return;

    const imageAngle = image.angle || 0;
    const isRotated90or270 = Math.abs(imageAngle % 180) === 90;

    // 회전을 고려한 실제 이미지 크기
    const actualImageWidth = isRotated90or270 ? image.height : image.width;
    const actualImageHeight = isRotated90or270 ? image.width : image.height;

    // 캔버스 크기
    const canvasWidth = this.c.getWidth();
    const canvasHeight = this.c.getHeight();

    // 줌된 이미지 크기
    const scaledImageWidth = actualImageWidth * zoom;
    const scaledImageHeight = actualImageHeight * zoom;

    // 이미지 중심점 (회전 고려)
    const imageCenterX = image.left;
    const imageCenterY = image.top;

    // 이미지의 실제 경계 좌표 (줌 적용)
    const imageLeft = (imageCenterX - actualImageWidth / 2) * zoom;
    const imageRight = (imageCenterX + actualImageWidth / 2) * zoom;
    const imageTop = (imageCenterY - actualImageHeight / 2) * zoom;
    const imageBottom = (imageCenterY + actualImageHeight / 2) * zoom;

    // 패닝 제한 계산
    let minX: number, maxX: number, minY: number, maxY: number;

    if (scaledImageWidth <= canvasWidth) {
      // 이미지가 캔버스보다 작거나 같으면 중앙에 고정
      const targetX = canvasWidth / 2 - imageCenterX * zoom;
      minX = maxX = targetX;
    } else {
      // 이미지가 캔버스보다 크면 이미지 경계가 캔버스 경계를 벗어나지 않도록
      // 이미지 오른쪽 끝이 캔버스 오른쪽에 닿을 때의 최소 X
      minX = canvasWidth - imageRight;
      // 이미지 왼쪽 끝이 캔버스 왼쪽에 닿을 때의 최대 X
      maxX = -imageLeft;
    }

    if (scaledImageHeight <= canvasHeight) {
      // 이미지가 캔버스보다 작거나 같으면 중앙에 고정
      const targetY = canvasHeight / 2 - imageCenterY * zoom;
      minY = maxY = targetY;
    } else {
      // 이미지가 캔버스보다 크면 이미지 경계가 캔버스 경계를 벗어나지 않도록
      // 이미지 아래쪽 끝이 캔버스 아래쪽에 닿을 때의 최소 Y
      minY = canvasHeight - imageBottom;
      // 이미지 위쪽 끝이 캔버스 위쪽에 닿을 때의 최대 Y
      maxY = -imageTop;
    }

    // viewport transform 제한 적용
    vpt[4] = this.clamp(vpt[4], minX, maxX);
    vpt[5] = this.clamp(vpt[5], minY, maxY);

    this.c.setViewportTransform(vpt);
  }

  detach() {
    if (this.c) {
      this.c.dispose();
      this.tool = null;
    }
  }

  getToolConfig(toolId: any) {
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

  selectTool(toolId: any) {
    if (!this.available) return;
    const config = this.getToolConfig(toolId);
    const newTool: any = new this.tools[toolId].class(this, config);
    const old = this.tool;
    (old as any)?.instance.onDeselect?.();
    this.tool = { name: toolId, instance: newTool };
    newTool.onSelect?.();
    if (old?.type !== newTool) {
      this._dispatch(EditorCore.Event.TOOL_CHANGE, toolId);
    }
    this.cacheTool();
  }

  updateToolConfig(toolId: any, attr: any) {
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

  setContainerSize(size: any) {
    this.containerSize = size;
    if (this.c) {
      this.fitCanvas();
    }
  }

  addImage(imageUrl: any) {
    if (!this.available) return;

    this.busy = true;
    this.selectTool(ToolName.SELECT);
    fabric.Image.fromURL(
      imageUrl,
      (img: any) => {
        //i create an extra var for to change some image properties
        this.c.add(img);
        this.c.centerObject(img);
        this.c.setActiveObject(img);
        img.erasable = false;
        this.busy = false;
      },
      {
        crossOrigin: 'anonymous',
        borderColor: '#0B99FF',
        cornerColor: '#0B99FF',
        cornerSize: 11,
      }
    );
  }

  async saveImageAsBlob(): Promise<Blob | null> {
    return new Promise((resolve, reject) => {
      const imageObject = this.c.getActiveObject();
      if (imageObject && imageObject.type === 'image') {
        // 이미지 객체가 유효한지 확인
        const width = imageObject.getScaledWidth();
        const height = imageObject.getScaledHeight();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // canvas 크기를 이미지 객체의 크기로 설정
        canvas.width = width;
        canvas.height = height;
        // 이미지를 캔버스에 그림
        ctx && ctx.drawImage(imageObject._element, 0, 0, width, height);
        canvas.toBlob(function (blob) {
          resolve(blob);
        });
      } else {
        reject(new Error('유효한 이미지 객체가 아닙니다.'));
      }
    });
  }

  calcTextSize(fontSize: any) {
    return (
      (MIN_TEXT_SIZE + (fontSize / 100) * (MAX_TEXT_SIZE - MIN_TEXT_SIZE)) /
      this.zoomMin
    );
  }

  calcFontSize(textSize: any) {
    return (
      ((textSize * this.zoomMin - MIN_TEXT_SIZE) /
        (MAX_TEXT_SIZE - MIN_TEXT_SIZE)) *
      100
    );
  }

  addText(
    placeholder: string,
    position?: { x: number; y: number },
    skipEditing?: boolean
  ) {
    if (!this.available) return;

    if (this.touchEnabled) {
      this.selectTool(ToolName.SELECT);
    }

    let canvasSpace = null;
    if (position) {
      canvasSpace = this.c.getPointer({
        clientX: position.x,
        clientY: position.y,
      });

      if (canvasSpace) {
        const clickedObject = this.c.findTarget(
          { x: position.x, y: position.y },
          false // includeMargins: false
        );

        if (clickedObject) {
          this.c.setActiveObject(clickedObject);
          this.c.requestRenderAll();
          return;
        }
      }
    }

    const text: any = new fabric.IText(placeholder, {
      borderColor: '#0B99FF',
      cornerColor: '#0B99FF',
      cornerSize: 11,
    });

    text.set('fill', this.config.text.color.code);
    text.set('fontSize', this.calcTextSize(this.config.text.fontSize));

    if (canvasSpace) {
      text.set('left', canvasSpace.x);
      text.set('top', canvasSpace.y);
    } else {
      this.c.viewportCenterObject(text);
    }

    text.erasable = false;

    this.c.add(text);

    if (!skipEditing) {
      this.c.setActiveObject(text);
      text.selectAll();
      text.enterEditing();
    }
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

  async loadFromHistory(history: any) {
    this.isTraversingHistory = true;
    await new Promise((resolve: any, reject) => {
      try {
        fabric.util.enlivenObjects(
          history,
          (objects: any) => {
            this.c.remove(...this.c.getObjects());
            objects.forEach((o: any) => {
              this.c.add(o);
            });

            this.c.renderAll();
            resolve();
          },
          null as any
        );
      } catch (e) {
        reject(e);
      }
    });
    this.isTraversingHistory = false;
  }

  async saveHistoryCache() {
    localStorage.setItem('historyCache', JSON.stringify(this.history));
  }

  async clearHistoryCache() {
    localStorage.removeItem('historyCache');
  }

  async loadHistoryCache() {
    const cache = localStorage.getItem('historyCache');
    if (cache) {
      this.history = JSON.parse(cache);
      const history = this.history.records[this.history.index];
      await this.loadFromHistory(history);
      this.clearHistoryCache();
    }
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
    this.history.records = [...prevHistories, this.c.toObject().objects] as any;
    this.history.index = this.history.records.length - 1;
    this._dispatchHistoryChange();
  }

  onHistoryChange(listener: any) {
    this.onHistoryChangeListener = listener;
  }

  onAvailabilityChange(listener: any) {
    this.onAvailabilityChangeListener = listener;
  }

  on(eventName: any, listener: any) {
    const wrapper = (e: any) => {
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

  _dispatch(eventName: any, data: any) {
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
    const image = this.c.backgroundImage;
    const container = this.containerSize;
    if (!image || !container) return;

    const imageWidth = image.width;
    const imageHeight = image.height;
    const imageAngle = image.angle || 0;

    // 90도 또는 270도 회전인지 확인
    const isRotated90or270 = Math.abs(imageAngle % 180) === 90;

    // 회전된 경우 실제 차지하는 공간의 width/height 계산
    const effectiveWidth = isRotated90or270 ? imageHeight : imageWidth;
    const effectiveHeight = isRotated90or270 ? imageWidth : imageHeight;

    let zoomMin = Math.min(
      this.containerSize.width / effectiveWidth,
      this.containerSize.height / effectiveHeight
    );

    const isSmallImage =
      container.width > effectiveWidth || container.height > effectiveHeight;

    if (isSmallImage) {
      zoomMin = Math.min(
        container.width / effectiveWidth,
        container.height / effectiveHeight
      );
    }

    this.zoomMin = zoomMin;
    this.c.setWidth(container.width);
    this.c.setHeight(container.height);

    image.set({
      originX: 'center',
      originY: 'center',
    });
    image.center();

    const clipPath = new fabric.Rect({
      width: effectiveWidth + 2,
      height: effectiveHeight + 2,
      originX: 'center',
      originY: 'center',
      angle: 0,
      left: image.left - 1,
      top: image.top - 1,
    });

    this.c.clipPath = clipPath;

    this.zoom({ x: container.width / 2, y: container.height / 2 }, zoomMin);
  }

  getDataUrl(format: any) {
    const originalTransform = this.c.viewportTransform;
    this.c.viewportTransform = fabric.iMatrix.slice(0);

    const image = this.c.backgroundImage;
    const imageAngle = image?.angle || 0;
    const isRotated90or270 = Math.abs(imageAngle % 180) === 90;

    // 회전된 경우 실제 차지하는 공간 크기 사용
    const exportWidth = isRotated90or270 ? image.height : image.width;
    const exportHeight = isRotated90or270 ? image.width : image.height;

    const dataUrl = this.c.toDataURL({
      format: format.toLowerCase() === 'png' ? 'png' : 'jpeg',
      width: exportWidth,
      height: exportHeight,
      left: image.left - exportWidth / 2,
      top: image.top - exportHeight / 2,
    });

    this.c.viewportTransform = originalTransform;
    return dataUrl;
  }

  async toBlob(): Promise<Blob | null> {
    const originalTransform = this.c.viewportTransform;
    this.c.viewportTransform = fabric.iMatrix.slice(0);

    const image = this.c.backgroundImage;
    const imageAngle = image?.angle || 0;
    const isRotated90or270 = Math.abs(imageAngle % 180) === 90;

    // 회전된 경우 실제 차지하는 공간 크기 사용
    const exportWidth = isRotated90or270 ? image.height : image.width;
    const exportHeight = isRotated90or270 ? image.width : image.height;

    const blob = new Promise((res, rej) => {
      this.c.toBlob(
        (blob: Blob) => {
          if (!blob) {
            rej(new Error('Cannot create blob'));
            return;
          }
          res(blob);
        },
        {
          width: exportWidth,
          height: exportHeight,
          left: image.left - exportWidth / 2,
          top: image.top - exportHeight / 2,
        }
      );
    });

    try {
      this.busy = true;
      await blob;
      return blob as any as Blob | null;
    } finally {
      this.c.viewportTransform = originalTransform;
      this.busy = false;
    }
  }

  deleteSelectedObject() {
    this.c.remove(this.c.getActiveObject());
  }

  changeSelectedTextSize(fontSize: any) {
    const text = this.c.getActiveObject();
    text.set('fontSize', this.calcTextSize(fontSize));
    this.config.text.fontSize = fontSize;
    this.cacheConfig();
    this.c.requestRenderAll();
  }

  changeSelectedTextColor(c: any) {
    const text = this.c.getActiveObject();
    text.set('fill', c.code);
    this.config.text.color = c;
    this.cacheConfig();
    this.c.requestRenderAll();
  }

  changeSelectedTextMessage(message: any) {
    const text = this.c.getActiveObject();
    text.set('text', message);
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
        type: 'preset',
        code: text.fill,
      };
    } else {
      return {
        type: 'custom',
        code: text.fill,
      };
    }
  }

  getSelectedTextContents() {
    const text = this.c.getActiveObject();
    return text.text;
  }

  setUsePencil(use: any) {
    this.config.usePencil = use;
    this.c.usePencil = use;
    this.cacheConfig();
  }

  fetchConfig() {
    const storedConfigRaw = localStorage.getItem('editorConfig');
    const storedConfig = storedConfigRaw ? JSON.parse(storedConfigRaw) : null;
    return {
      freedraw: storedConfig?.freedraw ?? {
        thickness: 3,
        color: {
          type: 'preset',
          code: PresetColor.BLACK,
        },
      },
      marker: storedConfig?.marker ?? {
        thickness: 3,
        color: {
          type: 'preset',
          code: PresetColor.BLACK,
        },
      },
      eraser: storedConfig?.eraser ?? {
        thickness: 3,
      },
      text: storedConfig?.text ?? {
        color: {
          type: 'preset',
          code: PresetColor.BLACK,
        },
        fontSize: 40,
      },
      usePencil: storedConfig?.usePencil ?? true,
    };
  }

  fetchTool() {
    return localStorage.getItem('editorTool') ?? ToolName.PAN;
  }

  cacheConfig() {
    localStorage.setItem('editorConfig', JSON.stringify(this.config));
  }

  cacheTool() {
    localStorage.setItem('editorTool', this.tool.name);
  }

  isDirty() {
    return this.history.index > 0;
  }

  rotateBaseImage90() {
    if (!this.available) return;
    if (!this.c.backgroundImage) return;

    const image = this.c.backgroundImage;
    const currentAngle = image.angle || 0;
    const newAngle = (currentAngle + 90) % 360;

    image.set({
      originX: 'center',
      originY: 'center',
      angle: newAngle,
    });

    image.center();
    this.c.requestRenderAll();
    this.fitCanvas();
  }

  saveCanvasJson(): any {
    if (!this.c) return null;

    const objects = this.c.getObjects().filter((obj: any) => {
      return obj !== this.c.backgroundImage;
    });

    // 백그라운드 이미지의 실제 크기와 위치
    const image = this.c.backgroundImage;
    const imageAngle = image?.angle || 0;
    const isRotated90or270 = Math.abs(imageAngle % 180) === 90;
    const imageWidth = isRotated90or270 ? image.height : image.width;
    const imageHeight = isRotated90or270 ? image.width : image.height;

    // 이미지의 실제 경계 (중심점 기준)
    const imageLeft = image.left - imageWidth / 2;
    const imageTop = image.top - imageHeight / 2;

    // 객체들을 상대적 위치로 변환하여 저장
    const normalizedObjects = objects.map((obj: any) => {
      const objData = obj.toObject();

      // 절대 좌표를 이미지 내 상대 비율(0~1)로 변환
      const relativeLeft = (obj.left - imageLeft) / imageWidth;
      const relativeTop = (obj.top - imageTop) / imageHeight;

      // 크기도 상대적으로 저장
      let relativeScale = 1;
      if (obj.type === 'i-text') {
        relativeScale = obj.fontSize / imageWidth; // 이미지 너비 대비 폰트 크기 비율
      } else {
        relativeScale = (obj.scaleX || 1) / imageWidth; // 이미지 너비 대비 스케일 비율
      }

      return {
        ...objData,
        relativeLeft,
        relativeTop,
        relativeScale,
        originalType: obj.type,
      };
    });

    return {
      objects: normalizedObjects,
      version: '1.0',
      timestamp: Date.now(),
      reference: {
        width: imageWidth,
        height: imageHeight,
        angle: imageAngle,
      },
    };
  }

  async loadCanvasJson(canvasData: any): Promise<boolean> {
    if (!this.available || !canvasData) return false;

    try {
      this.busy = true;
      this.isTraversingHistory = true;

      // 기존 객체들 제거 (백그라운드는 유지)
      const objectsToRemove = this.c.getObjects().filter((obj: any) => {
        return obj !== this.c.backgroundImage;
      });
      this.c.remove(...objectsToRemove);

      // 현재 캔버스의 백그라운드 이미지 정보
      const currentImage = this.c.backgroundImage;
      const currentAngle = currentImage?.angle || 0;
      const isCurrentRotated = Math.abs(currentAngle % 180) === 90;
      const currentWidth = isCurrentRotated
        ? currentImage.height
        : currentImage.width;
      const currentHeight = isCurrentRotated
        ? currentImage.width
        : currentImage.height;

      const currentLeft = currentImage.left - currentWidth / 2;
      const currentTop = currentImage.top - currentHeight / 2;

      // 저장된 객체들 복원
      if (canvasData.objects && canvasData.objects.length > 0) {
        await new Promise((resolve, reject) => {
          fabric.util.enlivenObjects(
            canvasData.objects,
            (objects: any) => {
              objects.forEach((obj: any, index: number) => {
                const savedObj = canvasData.objects[index];

                // 상대적 위치를 현재 이미지의 절대 좌표로 변환
                const absoluteLeft =
                  currentLeft + savedObj.relativeLeft * currentWidth;
                const absoluteTop =
                  currentTop + savedObj.relativeTop * currentHeight;

                obj.set({
                  left: absoluteLeft,
                  top: absoluteTop,
                });

                // 크기 복원
                if (savedObj.originalType === 'i-text') {
                  const newFontSize = savedObj.relativeScale * currentWidth;
                  obj.set('fontSize', newFontSize);
                } else {
                  const newScale = savedObj.relativeScale * currentWidth;
                  obj.set({
                    scaleX: newScale,
                    scaleY: newScale,
                  });
                }

                this.c.add(obj);
              });

              this.c.renderAll();
              resolve(true);
            },
            null as any
          );
        });
      }

      this.isTraversingHistory = false;
      this.busy = false;
      this.pushHistory();
      return true;
    } catch (error) {
      console.error('Failed to load canvas data:', error);
      this.isTraversingHistory = false;
      this.busy = false;
      return false;
    }
  }
}
