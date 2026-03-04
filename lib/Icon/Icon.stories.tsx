import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: { type: 'text' },
      description: 'Material Icons ligature name',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'home',
    size: 'md',
  },
  render: (args) => (
    <div className="text-clay">
      <Icon {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-8 text-clay">
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="sm" />
        <span className="text-xs text-soil">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="md" />
        <span className="text-xs text-soil">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon="favorite" size="lg" />
        <span className="text-xs text-soil">Large</span>
      </div>
    </div>
  ),
};

const iconExamples = ['home', 'search', 'add', 'settings', 'delete', 'edit', 'check', 'close'];

export const CommonIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 text-clay">
      {iconExamples.map((icon) => (
        <div key={icon} className="flex flex-col items-center gap-2">
          <Icon icon={icon} size="lg" />
          <span className="text-xs text-soil">{icon}</span>
        </div>
      ))}
    </div>
  ),
};
