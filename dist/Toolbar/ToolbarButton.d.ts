import { IconButtonProps } from '@mui/material';
import { ReactNode } from 'react';
type ToolbarButtonProps = {
    Icon: (props: any) => JSX.Element | null;
    selected?: boolean;
    small?: boolean;
    tooltip?: ReactNode;
    disableToolbar?: boolean;
    sx?: any;
    className?: string;
} & Omit<IconButtonProps, 'sx' | 'className'>;
export declare const ToolbarButton: ({ Icon, selected, small, tooltip, disableToolbar, sx, disabled, className, ...props }: ToolbarButtonProps) => JSX.Element;
export {};
