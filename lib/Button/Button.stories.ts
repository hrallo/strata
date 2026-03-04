import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'info', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    icon: {
      control: { type: 'text' },
    },
    iconPosition: {
      options: ['start', 'end'],
      control: { type: 'select' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Click Me',
    onClick: () => console.log('clicked'),
  },
};

export const DisabledButton: Story = {
  args: {
    ...DefaultButton.args,
    disabled: true,
  },
};

export const LoadingButton: Story = {
  args: {
    ...DefaultButton.args,
    isLoading: true,
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'add',
    iconPosition: 'start',
    children: 'Add item',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    icon: 'add',
    'aria-label': 'Add',
  },
};

const variants = ['primary', 'secondary', 'success', 'info', 'error'] as const;

export const AllButtons: Story = {
  render: () =>
    React.createElement(
      'div',
      { className: 'flex flex-col gap-8' },
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4 text-sm font-medium text-soil' }, 'Variants'),
        React.createElement(
          'div',
          { className: 'flex flex-wrap gap-3' },
          variants.map((variant) =>
            React.createElement(Button, { key: variant, variant }, variant),
          ),
        ),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4 text-sm font-medium text-soil' }, 'Sizes'),
        React.createElement(
          'div',
          { className: 'flex flex-wrap items-center gap-3' },
          React.createElement(Button, { variant: 'primary', size: 'small' }, 'Small'),
          React.createElement(Button, { variant: 'primary', size: 'medium' }, 'Medium'),
          React.createElement(Button, { variant: 'primary', size: 'large' }, 'Large'),
        ),
      ),
      React.createElement(
        'div',
        null,
        React.createElement('p', { className: 'mb-4 text-sm font-medium text-soil' }, 'With icons'),
        React.createElement(
          'div',
          { className: 'flex flex-wrap gap-3' },
          React.createElement(Button, { variant: 'primary', icon: 'add', iconPosition: 'start' }, 'Add'),
          React.createElement(Button, { variant: 'secondary', icon: 'search' }, 'Search'),
          React.createElement(Button, { variant: 'success', icon: 'check', iconPosition: 'end' }, 'Save'),
          React.createElement(Button, { variant: 'primary', icon: 'add', 'aria-label': 'Add' }),
          React.createElement(Button, { variant: 'secondary', icon: 'delete', 'aria-label': 'Delete' }),
        ),
      ),
    ),
};
