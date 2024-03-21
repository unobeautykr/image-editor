declare class ToolbarSettings {
    toolbarVerticalPosition: 'bottom' | 'top' | undefined;
    constructor();
    saveToolbarVerticalPosition: (position: 'top' | 'bottom') => void;
    changeToolbarVerticalPosition: (position: 'top' | 'bottom') => void;
}
declare const _default: ToolbarSettings;
export default _default;
