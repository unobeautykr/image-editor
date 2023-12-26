import { ReactNode } from 'react';
type ToolbarButtonProps = {
    Icon: (props: any) => JSX.Element | null;
    selected?: boolean;
    small?: boolean;
    tooltip?: ReactNode;
    disableToolbar?: boolean;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    sx?: any;
    className?: string;
};
export declare const ToolbarButton: ({ Icon, selected, small, tooltip, disableToolbar, sx, disabled, className, ...props }: ToolbarButtonProps) => JSX.Element;
export {};
