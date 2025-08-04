/// <reference types="react" />
export declare const Box: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    component?: import("react").ElementType<any> | undefined;
    ref?: import("react").Ref<unknown> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "children" | "ref" | ("p" | "borderColor" | "fontSize" | "left" | "top" | "bottom" | "right" | "border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "component" | "sx"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
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
    LinkComponent?: import("react").ElementType<any> | undefined;
    onFocusVisible?: import("react").FocusEventHandler<any> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    tabIndex?: number | undefined;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps> | undefined;
    touchRippleRef?: import("react").Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "children" | "color" | "sx" | "tabIndex" | "disabled" | "action" | "size" | keyof import("@mui/material/OverridableComponent").CommonProps | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "edge"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme> & {
    selected: boolean;
}, {}, {}>;
export declare const Typography: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    align?: "left" | "center" | "right" | "inherit" | "justify" | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides> | undefined;
    variantMapping?: Partial<Record<import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides>, string>> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, "children" | ("p" | "borderColor" | "fontSize" | "left" | "top" | "bottom" | "right" | "border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "sx" | "align" | keyof import("@mui/material/OverridableComponent").CommonProps | "variant" | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
