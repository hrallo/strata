import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div className="text-clay">
      <Spinner {...args} />
    </div>
  ),
};

const usageExamples = [
  { bg: 'bg-cream', text: 'text-clay' },
  { bg: 'bg-clay', text: 'text-cream' },
  { bg: 'bg-ember', text: 'text-alabaster' },
  { bg: 'bg-almond', text: 'text-coal' },
  { bg: 'bg-basil', text: 'text-cream' },
] as const;

export const ColorUsage: Story = {
  args: {
    size: 'medium',
  },
  render: (args) => (
    <div className="flex flex-wrap gap-6 p-8">
      {usageExamples.map(({ bg, text }, i) => (
        <div
          key={i}
          className={`flex items-center justify-center rounded-lg p-6 ${bg} ${text}`}
        >
          <Spinner {...args} />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 text-clay">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="small" />
        <span className="text-xs text-soil">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="medium" />
        <span className="text-xs text-soil">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="large" />
        <span className="text-xs text-soil">Large</span>
      </div>
    </div>
  ),
};
