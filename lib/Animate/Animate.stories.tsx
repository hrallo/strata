import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Animate } from './Animate';
import { Button } from '../Button';

function Diamond({ children }: { children: string }) {
  return (
    <div className="flex h-40 w-40 items-center justify-center p-2">
      <div className="flex rounded-sm h-28 w-28 shrink-0 rotate-45 items-center justify-center bg-clay outline outline-3 outline-clay outline-offset-2">
        <span className="-rotate-45 px-2 text-center text-sm font-medium text-cream">
          {children}
        </span>
      </div>
    </div>
  );
}

const meta = {
  title: 'Components/Animate',
  component: Animate,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['fadeUp', 'fadeIn', 'scaleUp', 'scaleDown', 'spin', 'shimmer'],
      control: { type: 'select' },
    },
    trigger: {
      options: ['inView', 'hover', 'mount', 'tap'],
      control: { type: 'select' },
    },
    delay: {
      control: { type: 'number' },
    },
    duration: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Animate>;

export default meta;

type Story = StoryObj<typeof Animate>;

const variants = ['fadeUp', 'fadeIn', 'scaleUp', 'scaleDown', 'spin', 'shimmer'] as const;

export const Default: Story = {
  args: {
    variant: 'fadeUp',
    trigger: 'mount',
  },
  render: function DefaultStory(args) {
    const [key, setKey] = useState(0);
    return (
      <div className="flex flex-col items-center gap-4">
        <Animate key={key} {...args}>
          <Diamond>Press Retrigger</Diamond>
        </Animate>
        <Button variant="secondary" size="small" onClick={() => setKey((k) => k + 1)}>
          Retrigger
        </Button>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-end justify-center gap-8">
      {variants.map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <Animate variant={variant} trigger="tap" className="cursor-pointer">
            <Diamond>{`Press for ${variant}`}</Diamond>
          </Animate>
          <span className="text-sm text-soil">{variant}</span>
        </div>
      ))}
    </div>
  ),
};

export const InView: Story = {
  args: {
    variant: 'scaleUp',
    trigger: 'inView',
  },
  render: function InViewStory(args) {
    const [key, setKey] = useState(0);
    return (
      <div className="space-y-24 py-24">
        <p className="text-soil">Scroll down to see the animation</p>
        <div className="flex flex-col items-center gap-4">
          <Animate key={key} {...args}>
            <Diamond>Scroll down</Diamond>
          </Animate>
          <Button variant="secondary" size="small" onClick={() => setKey((k) => k + 1)}>
            Retrigger
          </Button>
        </div>
      </div>
    );
  },
};

export const Mount: Story = {
  args: {
    variant: 'fadeIn',
    trigger: 'mount',
  },
  render: function MountStory(args) {
    const [key, setKey] = useState(0);
    return (
      <div className="flex flex-col items-center gap-4">
        <Animate key={key} {...args}>
          <Diamond>Retrigger to replay</Diamond>
        </Animate>
        <Button variant="secondary" size="small" onClick={() => setKey((k) => k + 1)}>
          Retrigger
        </Button>
      </div>
    );
  },
};

export const Hover: Story = {
  args: {
    variant: 'scaleUp',
    trigger: 'hover',
    className: 'cursor-pointer',
  },
  render: (args) => (
    <Animate {...args}>
      <Diamond>Hover</Diamond>
    </Animate>
  ),
};

export const Tap: Story = {
  args: {
    variant: 'scaleUp',
    trigger: 'tap',
    className: 'cursor-pointer',
  },
  render: (args) => (
    <Animate {...args}>
      <Diamond>Press</Diamond>
    </Animate>
  ),
};
