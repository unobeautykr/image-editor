/// <reference types="react" />
import { EditorCore } from "./EditorCore";
import { BoilerplateData } from "./types";
interface ImageEditorContextValue {
    core: EditorCore;
    touch: boolean;
    boilerplate?: {
        onLoadBoilerplate: () => Promise<BoilerplateData[]>;
        onSaveBoilerplate: (contents: string) => Promise<void>;
        onDeleteBoilerplate: (id: number) => Promise<void>;
    };
}
export declare function useImageEditor(): ImageEditorContextValue;
export declare function useTool(): {
    tool: any;
    setTool: (t: any) => void;
};
export interface ImageEditorProps {
    viewOnly?: boolean;
    imageUrl: string;
    boilerplate?: ImageEditorContextValue["boilerplate"];
    touch?: boolean;
}
export declare const ImageEditor: import("react").ForwardRefExoticComponent<ImageEditorProps & import("react").RefAttributes<HTMLElement>>;
export {};
