import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The Material Icons ligature name (e.g. "home", "search", "add").
   */
  icon: string;
  /**
   * Visual size of the icon.
   */
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: '1rem',      // 16px
  md: '1.25rem',   // 20px
  lg: '1.875rem',  // 30px
} as const;

export const Icon = ({ icon, size = 'md', className, style, ...rest }: IconProps) => (
  <span
    className={twMerge(clsx('material-icons select-none', className))}
    style={{ fontSize: sizeMap[size], ...style }}
    aria-hidden
    {...rest}
  >
    {icon}
  </span>
);

Icon.displayName = 'Icon';
