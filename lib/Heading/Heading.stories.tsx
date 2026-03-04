import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    size: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Heading',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading level={1} display>Display</Heading>
      <Heading level={1}>Heading One</Heading>
      <Heading level={2}>Heading Two</Heading>
      <Heading level={3}>Heading Three</Heading>
      <Heading level={4}>Heading Four</Heading>
      <Heading level={5}>Heading Five</Heading>
      <Heading level={6}>Heading Six</Heading>
    </div>
  ),
};

export const LevelVsSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}>h2 tag, size 4 (smaller):</p>
      <Heading level={2} size={4}>Section heading that looks smaller</Heading>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}>h4 tag, size 1 (larger):</p>
      <Heading level={4} size={1}>Subsection that looks like h1</Heading>
    </div>
  ),
};
