/// <reference types="react" />
export declare const ToolbarButton: import("@emotion/styled").StyledComponent<{
    Icon: (props: any) => JSX.Element | null;
    selected?: boolean | undefined;
    small?: boolean | undefined;
    tooltip?: import("react").ReactNode;
    disableToolbar?: boolean | undefined;
    onClick?: ((value?: any) => void) | undefined;
    disabled?: boolean | undefined;
    sx?: any;
    className?: string | undefined;
} & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
