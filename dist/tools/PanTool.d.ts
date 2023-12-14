import { ToolBase } from './ToolBase';
export declare class PanTool extends ToolBase {
    touchPositions: any;
    onMouseDown: any;
    isDragging: any;
    onMouseUp: any;
    onMouseMove: any;
    onObjectSelected: any;
    onSelectionCleared: any;
    onTouchDrag: any;
    lastPosX: any;
    lastPosY: any;
    pausePanning: any;
    constructor(core: any, config?: null);
    onSelect(): void;
    onDeselect(): void;
}
