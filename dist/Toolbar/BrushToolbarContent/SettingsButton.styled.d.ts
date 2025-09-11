/// <reference types="react" />
export declare const Switch: import("@emotion/styled").StyledComponent<import("@mui/material").SwitchProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const FormControlLabel: import("@emotion/styled").StyledComponent<import("@mui/material").FormControlLabelProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Radio: import("@emotion/styled").StyledComponent<import("@mui/material").RadioProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Stack: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    direction?: import("@mui/system").ResponsiveStyleValue<"row" | "column" | "column-reverse" | "row-reverse"> | undefined;
    spacing?: import("@mui/system").ResponsiveStyleValue<string | number> | undefined;
    divider?: import("react").ReactNode;
    useFlexGap?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "children" | "direction" | ("borderColor" | "fontSize" | "left" | "top" | "p" | "border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "right" | "bottom" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "spacing" | "divider" | "useFlexGap"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const MenuList: import("@emotion/styled").StyledComponent<{
    autoFocus?: boolean | undefined;
    autoFocusItem?: boolean | undefined;
    children?: import("react").ReactNode;
    disabledItemsFocusable?: boolean | undefined;
    disableListWrap?: boolean | undefined;
    variant?: "menu" | "selectedMenu" | undefined;
} & {
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ListClasses> | undefined;
    dense?: boolean | undefined;
    disablePadding?: boolean | undefined;
    subheader?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
}, "children" | "autoFocus" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "variant" | "dense" | "disablePadding" | "subheader" | "autoFocusItem" | "disabledItemsFocusable" | "disableListWrap"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const MenuItem: import("@emotion/styled").StyledComponent<{
    autoFocus?: boolean | undefined;
    classes?: Partial<import("@mui/material").MenuItemClasses> | undefined;
    dense?: boolean | undefined;
    disabled?: boolean | undefined;
    disableGutters?: boolean | undefined;
    divider?: boolean | undefined;
    selected?: boolean | undefined;
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
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | import("react").RefObject<HTMLLIElement> | null | undefined;
}, "children" | "autoFocus" | "tabIndex" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "disabled" | "action" | "selected" | "dense" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableGutters" | "divider"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Popper: import("@emotion/styled").StyledComponent<Omit<import("@mui/base").PopperUnstyledProps<"div", {}>, "direction"> & {
    components?: {
        Root?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    } | undefined;
    componentsProps?: {
        root?: import("@mui/base").SlotComponentProps<"div", import("@mui/base").PopperUnstyledRootSlotPropsOverrides, import("@mui/base").PopperUnstyledOwnerState> | undefined;
    } | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("react").RefAttributes<HTMLDivElement> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Button: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").ButtonClasses> | undefined;
    color?: import("@mui/types").OverridableStringUnion<"inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning", import("@mui/material").ButtonPropsColorOverrides> | undefined;
    disabled?: boolean | undefined;
    disableElevation?: boolean | undefined;
    disableFocusRipple?: boolean | undefined;
    endIcon?: import("react").ReactNode;
    fullWidth?: boolean | undefined;
    href?: string | undefined;
    size?: import("@mui/types").OverridableStringUnion<"small" | "large" | "medium", import("@mui/material").ButtonPropsSizeOverrides> | undefined;
    startIcon?: import("react").ReactNode;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"text" | "outlined" | "contained", import("@mui/material").ButtonPropsVariantOverrides> | undefined;
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
}, "children" | "color" | "tabIndex" | "sx" | "size" | keyof import("@mui/material/OverridableComponent").CommonProps | "href" | "disabled" | "action" | "variant" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableFocusRipple" | "disableElevation" | "endIcon" | "fullWidth" | "startIcon"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const Dialog: import("@emotion/styled").StyledComponent<import("@mui/material").DialogProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const DialogTitle: import("@emotion/styled").StyledComponent<{
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").DialogTitleClasses> | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & Omit<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    align?: "left" | "center" | "right" | "inherit" | "justify" | undefined;
    children?: import("react").ReactNode;
    classes?: Partial<import("@mui/material").TypographyClasses> | undefined;
    gutterBottom?: boolean | undefined;
    noWrap?: boolean | undefined;
    paragraph?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    variant?: import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides> | undefined;
    variantMapping?: Partial<Record<import("@mui/types").OverridableStringUnion<"inherit" | import("@mui/material").TypographyVariant, import("@mui/material").TypographyPropsVariantOverrides>, string>> | undefined;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | import("react").RefObject<HTMLSpanElement> | null | undefined;
}, "children" | ("borderColor" | "fontSize" | "left" | "top" | "p" | "border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "right" | "bottom" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "typography" | "fontFamily" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform") | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "align" | "variant" | "gutterBottom" | "noWrap" | "paragraph" | "variantMapping"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export declare const DialogContent: import("@emotion/styled").StyledComponent<import("@mui/material").DialogContentProps & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
