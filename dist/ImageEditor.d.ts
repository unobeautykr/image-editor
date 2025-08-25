import { ReactNode } from 'react';
import { EditorCore } from './EditorCore';
import { BoilerplateData } from './types';
import { EditorMode, ToolbarPosition } from './types/editor';
export interface ImageEditorRef {
    getDataUrl: (format?: string) => string;
    toBlob: () => Promise<Blob | null>;
    isDirty: () => boolean;
    isBusy: () => boolean;
    saveCanvasJson: () => any;
    loadCanvasJson: (json: any) => void;
}
interface ImageEditorContextValue {
    core: EditorCore;
    touch: boolean;
    boilerplate?: {
        onLoadBoilerplate?: () => Promise<BoilerplateData[]>;
        onSaveBoilerplate?: (contents: any) => Promise<void>;
        onDeleteBoilerplate?: (id: number) => Promise<void>;
    }[];
    toolbarPosition: ToolbarPosition;
}
export declare function useImageEditor(): ImageEditorContextValue;
export declare function useTool(): {
    tool: any;
    setTool: (t: any) => void;
};
export interface ImageEditorProps {
    viewOnly?: boolean;
    imageUrl: string;
    boilerplate?: ImageEditorContextValue['boilerplate'];
    touch?: boolean;
    toolbarPosition?: ToolbarPosition;
    leadingItems?: ReactNode;
    mode?: EditorMode;
    customerTemplates?: BoilerplateData[];
}
export declare const ImageEditor: import("react").ForwardRefExoticComponent<ImageEditorProps & import("react").RefAttributes<ImageEditorRef>>;
export {};
