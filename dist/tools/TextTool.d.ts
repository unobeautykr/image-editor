import { ToolBase } from './ToolBase';
export declare class TextTool extends ToolBase {
    constructor(core: any, config?: null);
    private selected;
    onMouseDownBefore: (opt: any) => void;
    onMouseDown: (opt: any) => void;
    onSelect(): void;
    onDeselect(): void;
}
