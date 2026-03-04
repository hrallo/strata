import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const bodyElements = ['div', 'p', 'span', 'label', 'li'] as const;
export type BodyAs = (typeof bodyElements)[number];

export type BodyVariant = 'lg' | 'base' | 'sm' | 'caption';

export interface BodyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The element to render (div, p, span, label, or li).
   * Use for semantic correctness in different contexts.
   * @default 'p'
   */
  as?: BodyAs;
  /**
   * The visual size variant.
   * @default 'base'
   */
  variant?: BodyVariant;
}

const variantStyles: Record<BodyVariant, string> = {
  lg: 'font-body text-lg',
  base: 'font-body text-base',
  sm: 'font-body text-sm',
  caption: 'font-body text-xs tracking-wider font-semibold',
};

export const Body = ({ as: Tag = 'p', variant = 'base', className, children, ...rest }: BodyProps) => (
  <Tag
    className={twMerge(clsx(variantStyles[variant], 'text-coal', className))}
    {...rest}
  >
    {children}
  </Tag>
);
