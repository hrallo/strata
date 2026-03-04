import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

export type AnimateTrigger = 'inView' | 'hover' | 'mount' | 'tap';

export type AnimateVariant = 'fadeUp' | 'fadeIn' | 'scaleUp' | 'scaleDown' | 'spin' | 'shimmer';

export interface AnimateProps {
  children: React.ReactNode;
  variant?: AnimateVariant;
  trigger?: AnimateTrigger;
  delay?: number;
  duration?: number;
  className?: string;
}

const variants: Record<AnimateVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1 },
  },
  spin: {
    hidden: { rotate: 0 },
    visible: { rotate: [0, 372, 360] },
  },
  shimmer: {
    hidden: {
      backgroundPosition: '200% center',
    },
    visible: {
      backgroundPosition: '-200% center',
    },
  },
};

const scaleUpBloom = { scale: 1.05 };
const scaleDownShrink = { scale: 0.95 };

const shimmerOverlayStyle = {
  position: 'absolute' as const,
  inset: 0,
  pointerEvents: 'none' as const,
  background:
    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
  backgroundSize: '200% auto',
  backgroundRepeat: 'no-repeat' as const,
};

const shimmerTransition = { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const };

const ease = [0.4, 0, 0.2, 1] as const;
const spinEase = [0.33, 0, 0.2, 1] as const;

export const Animate = ({
  children,
  variant = 'fadeUp',
  trigger = 'mount',
  delay = 0,
  duration = 0.6,
  className,
}: AnimateProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [replayKey, setReplayKey] = useState(0);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition =
    variant === 'spin'
      ? { duration, delay, ease: spinEase }
      : { duration, delay, ease };
  const variantConfig = variants[variant];

  if (variant === 'shimmer') {
    const ShimmerOverlay = (props: { key?: number }) => (
      <motion.div
        {...props}
        style={shimmerOverlayStyle}
        initial="hidden"
        animate="visible"
        variants={variants.shimmer}
        transition={shimmerTransition}
      />
    );

    if (trigger === 'mount') {
      return (
        <div className={className} style={{ position: 'relative' }}>
          {children}
          <ShimmerOverlay />
        </div>
      );
    }
    if (trigger === 'inView') {
      return (
        <div className={className} style={{ position: 'relative' }}>
          {children}
          <motion.div
            style={shimmerOverlayStyle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={variants.shimmer}
            transition={shimmerTransition}
          />
        </div>
      );
    }
    if (trigger === 'hover') {
      return (
        <div className={className} onMouseEnter={() => setReplayKey((k) => k + 1)}>
          <div style={{ position: 'relative' }}>
            {children}
            <ShimmerOverlay key={replayKey} />
          </div>
        </div>
      );
    }
    if (trigger === 'tap') {
      return (
        <div
          role="button"
          tabIndex={0}
          className={className}
          onClick={() => setReplayKey((k) => k + 1)}
          onKeyDown={(e) => e.key === 'Enter' && setReplayKey((k) => k + 1)}
        >
          <div style={{ position: 'relative' }}>
            {children}
            <ShimmerOverlay key={replayKey} />
          </div>
        </div>
      );
    }
  }

  if (trigger === 'mount') {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="visible"
        variants={variantConfig}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  if (trigger === 'hover') {
    if (variant === 'scaleUp') {
      return (
        <motion.div
          className={className}
          initial="hidden"
          animate="visible"
          whileHover={scaleUpBloom}
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      );
    }
    if (variant === 'scaleDown') {
      return (
        <motion.div
          className={className}
          initial="hidden"
          animate="visible"
          whileHover={scaleDownShrink}
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      );
    }
    return (
      <div
        className={className}
        onMouseEnter={() => setReplayKey((k) => k + 1)}
      >
        <motion.div
          key={replayKey}
          initial="hidden"
          animate="visible"
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (trigger === 'tap') {
    if (variant === 'scaleUp') {
      return (
        <motion.div
          role="button"
          tabIndex={0}
          className={className}
          initial="hidden"
          animate="visible"
          whileTap={scaleUpBloom}
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      );
    }
    if (variant === 'scaleDown') {
      return (
        <motion.div
          role="button"
          tabIndex={0}
          className={className}
          initial="hidden"
          animate="visible"
          whileTap={scaleDownShrink}
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      );
    }
    return (
      <div
        role="button"
        tabIndex={0}
        className={className}
        onClick={() => setReplayKey((k) => k + 1)}
        onKeyDown={(e) => e.key === 'Enter' && setReplayKey((k) => k + 1)}
      >
        <motion.div
          key={replayKey}
          initial="hidden"
          animate="visible"
          variants={variantConfig}
          transition={transition}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variantConfig}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

Animate.displayName = 'Animate';
