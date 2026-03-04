import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Body } from './Body';

const meta = {
  title: 'Components/Body',
  component: Body,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      options: ['div', 'p', 'span', 'label', 'li'],
      control: { type: 'select' },
    },
    variant: {
      options: ['lg', 'base', 'sm', 'caption'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Body>;

export default meta;

type Story = StoryObj<typeof Body>;

export const Default: Story = {
  args: {
    as: 'p',
    children: 'Body text paragraph. Use the correct container for your context.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Body variant="lg">Body large (18px)</Body>
      <Body variant="base">Body base (16px)</Body>
      <Body variant="sm">Body small (14px)</Body>
      <Body variant="caption">Caption (12px)</Body>
    </div>
  ),
};

export const AsVsVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}>p tag, variant caption (smaller):</p>
      <Body as="p" variant="caption">Paragraph that looks like a caption</Body>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px' }}>span tag, variant lg (larger):</p>
      <Body as="span" variant="lg">Inline text that looks large</Body>
    </div>
  ),
};
