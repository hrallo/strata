import React from 'react';
import type { Preview } from '@storybook/react';
import '../lib/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      if (context.viewMode === 'docs') {
        return React.createElement(
          'div',
          { className: 'sb-unstyled' },
          React.createElement(Story),
        );
      }
      return React.createElement(Story);
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: { inline: true },
    },
  },
};

export default preview;
