interface TextBoilerplatePopupProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
    onSelect: (contents: string) => void;
    boilerplates: any[];
}
export declare const TextBoilerplatePopup: ({ anchorEl, open, onClose, onSelect, boilerplates, }: TextBoilerplatePopupProps) => import("react/jsx-runtime").JSX.Element;
export {};
