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
};
export declare const ToolbarButton: ({ Icon, selected, small, tooltip, disableToolbar, sx, disabled, ...props }: ToolbarButtonProps) => JSX.Element;
export {};
