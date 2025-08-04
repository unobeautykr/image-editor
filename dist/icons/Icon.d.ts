/// <reference types="react" />
type IconProps = {
    variant: 'eraser' | 'image' | 'pen' | 'move' | 'redo' | 'undo' | 'hand' | 'bookmark' | 'bookmark_2' | 'text' | 'calendar' | 'pencil' | 'fold' | 'more' | 'arrow' | 'library_add' | 'bookmark_text' | 'bookmark_image' | 'delete' | 'clockwise90';
    width?: number;
    height?: number;
};
declare const Icon: ({ variant, ...rest }: IconProps) => JSX.Element | null;
export default Icon;
