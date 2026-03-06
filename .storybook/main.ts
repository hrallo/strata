import type { StorybookConfig } from '@storybook/react-vite';
import { withoutVitePlugins } from '@storybook/builder-vite';

const config: StorybookConfig = {
  staticDirs: [{ from: '../assets', to: '/assets' }],
  stories: [
    '../lib/Welcome/Welcome.mdx', // Default landing page – listed first
    '../lib/Styleguide/Styleguide.mdx',
    '../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-actions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => ({
    ...config,
    // Base path for GitHub Pages (change if your repo name differs)
    base: process.env.NODE_ENV === 'production' ? '/strata/' : '/',
    plugins: await withoutVitePlugins(config.plugins, ['vite:dts']), // skip dts plugin
  }),
};
export default config;
