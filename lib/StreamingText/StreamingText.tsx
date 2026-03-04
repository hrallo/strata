import React, { useEffect, useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface StreamingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The full text to stream.
   */
  children: string;
  /**
   * Streaming speed in milliseconds per chunk.
   * @default 30
   */
  speed?: number;
  /**
   * Stream by character or word.
   * @default 'char'
   */
  chunk?: 'char' | 'word';
  /**
   * Show a blinking cursor while streaming.
   * @default true
   */
  cursor?: boolean;
  /**
   * Called when streaming completes.
   */
  onComplete?: () => void;
}

export const StreamingText = ({
  children,
  speed = 30,
  chunk = 'char',
  cursor = true,
  onComplete,
  className,
  ...rest
}: StreamingTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [visibleLength, setVisibleLength] = useState(0);
  const completedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const fullText = children;
  const chunks =
    chunk === 'char'
      ? fullText.split('')
      : fullText.split(/(\s+)/).filter(Boolean);
  const totalChunks = chunks.length;

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleLength(totalChunks);
      return;
    }

    setVisibleLength(0);
    completedRef.current = false;

    let index = 0;
    const tick = () => {
      if (index < totalChunks) {
        index += 1;
        setVisibleLength(index);
        timeoutRef.current = setTimeout(tick, speed);
      } else if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current?.();
      }
    };
    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [fullText, speed, chunk, totalChunks, prefersReducedMotion]);

  const visibleText =
    chunk === 'char'
      ? chunks.slice(0, visibleLength).join('')
      : chunks.slice(0, visibleLength).join('');
  const isComplete = visibleLength >= totalChunks;

  return (
    <span
      className={twMerge(clsx('inline', className))}
      {...rest}
    >
      {visibleText}
      {cursor && !isComplete && (
        <span
          className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-current align-middle"
          aria-hidden
        />
      )}
    </span>
  );
};

StreamingText.displayName = 'StreamingText';
