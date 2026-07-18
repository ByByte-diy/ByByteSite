// src/app/shared/ui/button/button-presets.ts
var BUTTON_PRESETS = {
  // Primary actions
  primary: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "md"
  }),
  // Secondary actions
  secondary: (text, icon) => ({
    text,
    icon,
    variant: "secondary",
    size: "md"
  }),
  // Success/Positive actions
  success: (text, icon) => ({
    text,
    icon,
    variant: "success",
    size: "md"
  }),
  // Warning actions
  warning: (text, icon) => ({
    text,
    icon,
    variant: "warning",
    size: "md"
  }),
  // Danger/Destructive actions
  danger: (text, icon) => ({
    text,
    icon,
    variant: "danger",
    size: "md"
  }),
  // Ghost/Subtle actions
  ghost: (text, icon) => ({
    text,
    icon,
    variant: "ghost",
    size: "md"
  }),
  // Outline actions
  outline: (text, icon) => ({
    text,
    icon,
    variant: "outline",
    size: "md"
  }),
  // Sizes
  small: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "sm"
  }),
  large: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "lg"
  }),
  extraLarge: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "xl"
  }),
  // Common button types
  cta: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "lg"
  }),
  link: (text, href, icon) => ({
    text,
    icon,
    variant: "ghost",
    size: "md",
    href
  }),
  externalLink: (text, href, icon) => ({
    text,
    icon,
    variant: "outline",
    size: "md",
    href,
    target: "_blank"
  }),
  submit: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "md",
    type: "submit"
  }),
  // Loading states
  loading: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "md",
    loading: true
  }),
  // Disabled states
  disabled: (text, icon) => ({
    text,
    icon,
    variant: "primary",
    size: "md",
    disabled: true
  })
};

export {
  BUTTON_PRESETS
};
//# sourceMappingURL=chunk-VWHM4LEQ.js.map
