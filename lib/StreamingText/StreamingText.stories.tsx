import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { StreamingText } from './StreamingText';
import { Body } from '../Body';

const meta = {
  title: 'Components/StreamingText',
  component: StreamingText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    speed: {
      control: { type: 'number', min: 5, max: 200, step: 5 },
    },
    chunk: {
      options: ['char', 'word'],
      control: { type: 'select' },
    },
    cursor: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof StreamingText>;

export default meta;

type Story = StoryObj<typeof StreamingText>;

const sampleText =
  'Strata helps you build thoughtful interfaces. Components stream, animate, and adapt, keeping your product can keep up with the pace of modern AI.';

export const Default: Story = {
  args: {
    children: sampleText,
    speed: 30,
    chunk: 'char',
    cursor: true,
  },
  render: (args) => (
    <Body as="div" variant="lg" className="max-w-xl text-coal">
      <StreamingText {...args} />
    </Body>
  ),
};

export const ByWord: Story = {
  args: {
    children: sampleText,
    speed: 80,
    chunk: 'word',
    cursor: true,
  },
  render: (args) => (
    <Body as="div" variant="base" className="max-w-xl text-coal">
      <StreamingText {...args} />
    </Body>
  ),
};

export const FastStream: Story = {
  args: {
    children: 'Responsive, accessible, and ready for AI-era UIs.',
    speed: 15,
    cursor: true,
  },
  render: (args) => (
    <Body as="div" variant="base" className="text-coal">
      <StreamingText {...args} />
    </Body>
  ),
};
