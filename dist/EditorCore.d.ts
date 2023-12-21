export declare const ToolName: {
    FREEDRAW: string;
    SELECT: string;
    PAN: string;
    TEXT: string;
    MARKER: string;
    ERASER: string;
    TIMESTAMP: string;
    SIMPLE_INPUT: string;
};
export declare const PresetColor: {
    BLACK: string;
    RED: string;
    YELLOW: string;
    GREEN: string;
    BLUE: string;
};
export declare class EditorCore extends EventTarget {
    static readonly Event: {
        HISTORY_CHANGE: string;
        AVAILABILITY_CHANGE: string;
        TOOL_CHANGE: string;
        MODE_CHANGE: string;
        TEXT_CHANGE: string;
    };
    static readonly Mode: {
        BRUSH: string;
        TEXT: string;
        IMAGE: string;
    };
    static readonly ConfigName: {
        FREEDRAW: string;
        MARKER: string;
        ERASER: string;
        TEXT: string;
    };
    mode: string;
    imageUrl: string;
    private _busy;
    private zoomMin;
    private zoomMax;
    private history;
    private _isTraversingHistory;
    private touchEnabled;
    private c;
    tool: any;
    config: any;
    isDragging: any;
    zoomStartScale: any;
    touches: any;
    lastPoint: any;
    onMouseWheel: any;
    onMouseUp: any;
    onGesture: any;
    onObjectAdded: any;
    onObjectModified: any;
    onObjectRemoved: any;
    onObjectSelected: any;
    onObjectDeselected: any;
    containerSize: any;
    onHistoryChangeListener: any;
    onAvailabilityChangeListener: any;
    private tools;
    constructor({ imageUrl, touchEnabled, }: {
        imageUrl: string;
        touchEnabled: boolean;
    });
    setCanvas(element: HTMLCanvasElement): void;
    zoom(point: any, targetZoom: any): void;
    pan(x: any, y: any): void;
    clamp(value: any, min: any, max: any): number;
    adjustPan(): void;
    detach(): void;
    getToolConfig(toolId: any): any;
    selectTool(toolId: any): void;
    updateToolConfig(toolId: any, attr: any): any;
    setContainerSize(size: any): void;
    addImage(imageUrl: any): void;
    calcTextSize(fontSize: any): number;
    calcFontSize(textSize: any): number;
    addText(placeholder: string, position?: {
        x: number;
        y: number;
    }, skipEditing?: boolean): void;
    undo(): Promise<void>;
    redo(): Promise<void>;
    loadFromHistory(history: any): Promise<void>;
    get isTraversingHistory(): boolean;
    set isTraversingHistory(value: boolean);
    get busy(): boolean;
    set busy(v: boolean);
    get available(): boolean;
    pushHistory(): void;
    onHistoryChange(listener: any): void;
    onAvailabilityChange(listener: any): void;
    on(eventName: any, listener: any): () => void;
    getHistoryInfo(): {
        index: number;
        histories: number;
    };
    _dispatch(eventName: any, data: any): void;
    _dispatchHistoryChange(): void;
    _dispatchAvailbilityChange(): void;
    fitCanvas(): void;
    getDataUrl(format: any): any;
    toBlob(): Promise<unknown>;
    deleteSelectedObject(): void;
    changeSelectedTextSize(fontSize: any): void;
    changeSelectedTextColor(c: any): void;
    changeSelectedTextMessage(message: any): void;
    getSelectedTextSize(): number;
    getSelectedTextColor(): {
        type: string;
        code: any;
    };
    getSelectedTextContents(): any;
    setUsePencil(use: any): void;
    fetchConfig(): {
        freedraw: any;
        marker: any;
        eraser: any;
        text: any;
        usePencil: any;
    };
    fetchTool(): string;
    cacheConfig(): void;
    cacheTool(): void;
    isDirty(): boolean;
}
