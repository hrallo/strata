import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const levelOrSize = [1, 2, 3, 4, 5, 6] as const;
export type HeadingLevelOrSize = (typeof levelOrSize)[number];

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The heading level (1-6), determines the rendered element (h1-h6).
   */
  level: HeadingLevelOrSize;
  /**
   * The visual size (1-6), controls the applied styles.
   * Defaults to level when not specified.
   */
  size?: HeadingLevelOrSize;
  /**
   * Whether to use the display font
   * @default false
   */
  display?: boolean;
}

const headingStyles = {
  1: 'font-heading font-light text-5xl tracking-tight text-soil',
  2: 'font-heading font-light text-4xl tracking-tight text-soil',
  3: 'font-heading text-3xl tracking-tight text-soil',
  4: 'font-heading font-bold text-2xl text-soil',
  5: 'font-heading font-bold text-xl text-soil',
  6: 'font-body font-semibold text-xs uppercase tracking-wider text-soil',
} as const;

const displayStyles = 'font-display text-7xl text-terracotta'

const HeadingTag = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level, size = level, display = false, className, children, ...rest }, ref) => {
    const Tag = HeadingTag[level];
    return (
      <Tag
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={twMerge(
          clsx(
            display ? displayStyles : headingStyles[size],
            className
          )
        )}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
