type IconProps = {
    variant: 'eraser' | 'image' | 'pen' | 'move' | 'redo' | 'undo' | 'hand' | 'bookmark' | 'bookmark_2' | 'text' | 'calendar' | 'pencil' | 'fold' | 'more' | 'arrow' | 'library_add' | 'bookmark_text' | 'bookmark_image' | 'delete' | 'clockwise90' | 'customer_template';
    width?: number;
    height?: number;
    [key: string]: any;
};
declare const Icon: ({ variant, ...rest }: IconProps) => import("react/jsx-runtime").JSX.Element | null;
export default Icon;
