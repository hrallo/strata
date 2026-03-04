import React from 'react';
import clsx from 'clsx';

export interface SpinnerProps {
  /**
   * Size of the spinner.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Additional class names.
   */
  className?: string;
}

const sizeStyles = {
  small: 'h-3 w-3',
  medium: 'h-4 w-4',
  large: 'h-6 w-6',
} as const;

export const Spinner = ({ size = 'medium', className }: SpinnerProps) => (
  <svg
    className={clsx('shrink-0 text-inherit [animation:spin_1.5s_linear_infinite]', sizeStyles[size], className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    aria-hidden
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
    />
    <path
      className="opacity-75"
      stroke="currentColor"
      d="M12 2a10 10 0 0 1 7.07 2.93"
    />
  </svg>
);

Spinner.displayName = 'Spinner';
