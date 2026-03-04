import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Spinner } from '../Spinner';
import { Icon } from '../Icon/Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual variant of the button.
   */
  variant?: 'primary' | 'secondary' | 'success' | 'info' | 'error';

  /**
   * The size of the button.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Material Icons ligature name (e.g. "add", "search", "delete").
   */
  icon?: string;

  /**
   * Position of the icon relative to the label.
   */
  iconPosition?: 'start' | 'end';

  /**
   * Shows a loading spinner and disables the button.
   */
  isLoading?: boolean;
}

const baseStyles =
  'relative inline-flex items-center justify-center overflow-hidden rounded border-0 font-inherit text-white outline-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer font-semibold tracking-wide';

const colorStyles = {
  primary: [
    'bg-clay text-cream font-bold',
    'hover:ring-2 hover:ring-clay hover:ring-offset-2',
    'focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2',
    'active:ring-2 active:ring-clay active:ring-offset-2',
  ].join(' '),
  secondary: [
    'bg-transparent text-clay border-2 border-clay',
    'hover:ring-2 hover:ring-clay hover:ring-offset-2',
    'focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2',
    'active:ring-2 active:ring-clay active:ring-offset-2',
  ].join(' '),
  success: [
    'bg-basil text-cream',
    'hover:ring-2 hover:ring-basil hover:ring-offset-2',
    'focus-visible:ring-2 focus-visible:ring-basil focus-visible:ring-offset-2',
    'active:ring-2 active:ring-basil active:ring-offset-2',
  ].join(' '),
  info: [
    'bg-almond text-coal',
    'hover:ring-2 hover:ring-almond hover:ring-offset-2',
    'focus-visible:ring-2 focus-visible:ring-almond focus-visible:ring-offset-2',
    'active:ring-2 active:ring-almond active:ring-offset-2',
  ].join(' '),
  error: [
    'bg-ember text-alabaster',
    'hover:ring-2 hover:ring-ember hover:ring-offset-2',
    'focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
    'active:ring-2 active:ring-ember active:ring-offset-2',
  ].join(' '),
} as const;

const sizeStyles = {
  small: 'h-7 px-4 py-2 text-xs tracking-wide',
  medium: 'h-9 px-6 py-4 text-sm',
  large: 'h-10 px-8 py-5 text-md',
} as const;

const iconOnlySizeStyles = {
  small: 'h-7 w-7 p-0',
  medium: 'h-9 w-9 p-0',
  large: 'h-10 w-10 p-0',
} as const;

const iconSizeMap = {
  small: 'sm' as const,
  medium: 'md' as const,
  large: 'lg' as const,
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      className,
      children,
      icon,
      iconPosition = 'start',
      isLoading,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const iconOnly = Boolean(icon && !children);
    const iconElement = icon && (
      <Icon icon={icon} size={iconSizeMap[size]} className="shrink-0" />
    );

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={twMerge(
          clsx(
            baseStyles,
            colorStyles[variant],
            iconOnly ? iconOnlySizeStyles[size] : sizeStyles[size],
            className,
          ),
        )}
        {...rest}
      >
        <span className="relative flex items-center justify-center gap-2">
          {isLoading && <Spinner size="small" />}
          {!isLoading && iconPosition === 'start' && iconElement}
          {children}
          {!isLoading && iconPosition === 'end' && iconElement}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
