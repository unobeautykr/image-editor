/// <reference types="react" />
type IconProps = {
    variant: 'eraser' | 'image' | 'pen' | 'move' | 'redo' | 'undo' | 'hand' | 'bookmark' | 'bookmark_library' | 'text' | 'calendar' | 'pencil' | 'fold' | 'more' | 'arrow' | 'library_add' | 'bookmark_text' | 'bookmark_image' | 'delete';
    width?: number;
    height?: number;
};
declare const Icon: ({ variant, ...rest }: IconProps) => JSX.Element;
export default Icon;
