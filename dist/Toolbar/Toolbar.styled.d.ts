/// <reference types="react" />
import { ToolbarPosition } from '../types/editor';
export declare const Paper: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").PaperClasses> | undefined;
    elevation?: number | undefined;
    square?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"elevation" | "outlined", import("@mui/material").PaperPropsVariantOverrides> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "children" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "elevation" | "variant" | "square"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Box: import("styled-components").StyledComponent<import("@mui/types").OverridableComponent<import("@mui/system").BoxTypeMap<{}, "div", import("@mui/material").Theme>>, any, {
    toolbarposition?: ToolbarPosition | undefined;
    $toolbarverticalposition?: "top" | "bottom" | undefined;
    window_height?: number | undefined;
    window_width?: number | undefined;
    toolbar_width?: number | undefined;
    toolbar_height?: number | undefined;
    $showcontrolpad?: boolean | undefined;
}, never>;
export declare const IconButton: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").IconButtonClasses> | undefined;
    color?: import("@mui/types").OverridableStringUnion<"default" | "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning", import("@mui/material").IconButtonPropsColorOverrides> | undefined;
    disabled?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    edge?: false | "start" | "end" | undefined;
    size?: import("@mui/types").OverridableStringUnion<"small" | "large" | "medium", import("@mui/material").IconButtonPropsSizeOverrides> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<{
    action?: import("react").Ref<import("@mui/material").ButtonBaseActions> | undefined;
    centerRipple?: boolean | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses> | undefined;
    disabled?: boolean | undefined;
    disableRipple?: boolean | undefined;
    disableTouchRipple?: boolean | undefined;
    focusRipple?: boolean | undefined;
    focusVisibleClassName?: string | undefined;
    LinkComponent?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "children" | "color" | "tabIndex" | "sx" | "size" | keyof import("@mui/material/OverridableComponent").CommonProps | "disabled" | "action" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
