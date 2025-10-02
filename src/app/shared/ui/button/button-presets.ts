import { ButtonData } from './button';

export const BUTTON_PRESETS = {
  // Primary actions
  primary: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'md',
  }),

  // Secondary actions
  secondary: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'secondary',
    size: 'md',
  }),

  // Success/Positive actions
  success: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'success',
    size: 'md',
  }),

  // Warning actions
  warning: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'warning',
    size: 'md',
  }),

  // Danger/Destructive actions
  danger: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'danger',
    size: 'md',
  }),

  // Ghost/Subtle actions
  ghost: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'ghost',
    size: 'md',
  }),

  // Outline actions
  outline: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'outline',
    size: 'md',
  }),

  // Sizes
  small: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'sm',
  }),

  large: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'lg',
  }),

  extraLarge: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'xl',
  }),

  // Common button types
  cta: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'lg',
  }),

  link: (text: string, href: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'ghost',
    size: 'md',
    href,
  }),

  externalLink: (text: string, href: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'outline',
    size: 'md',
    href,
    target: '_blank',
  }),

  submit: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'md',
    type: 'submit',
  }),

  // Loading states
  loading: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'md',
    loading: true,
  }),

  // Disabled states
  disabled: (text: string, icon?: string): ButtonData => ({
    text,
    icon,
    variant: 'primary',
    size: 'md',
    disabled: true,
  }),
} as const;
