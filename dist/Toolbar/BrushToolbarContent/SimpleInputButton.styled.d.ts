/// <reference types="react" />
export declare const ToolbarButton: import("@emotion/styled").StyledComponent<{
    Icon: (props: any) => JSX.Element | null;
    selected?: boolean | undefined;
    small?: boolean | undefined;
    tooltip?: import("react").ReactNode;
    disableToolbar?: boolean | undefined;
    sx?: any;
    className?: string | undefined;
} & Omit<import("@mui/material").IconButtonProps, "sx" | "className"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
