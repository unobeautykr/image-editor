/// <reference types="react" />
import { EditorMode } from '../types/editor';
interface ToolbarProps {
    leadingItems?: React.ReactNode;
    mode: EditorMode;
}
export declare const Toolbar: ({ leadingItems, mode: editorMode }: ToolbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
