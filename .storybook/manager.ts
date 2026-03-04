import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  layoutCustomisations: {
    showSidebar() {
      return true; // Always show sidebar so users can navigate
    },
  },
  theme: create({
    base: 'light',

    // Brand
    brandTitle: 'Strata',
    brandUrl: '/',
    brandTarget: '_self',
    brandImage: 'assets/logo.svg',
    colorPrimary: '#C1665E',
    colorSecondary: '#C1665E',

    // UI colors
    appBg: '#FFF9F2',        
    appContentBg: '#fefaf4',
    appBorderColor: '#ECE3D6', 
    appBorderRadius: 8,

    // Typography
    fontBase: '"Figtree", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#211C1C',    
    textInverseColor: '#FFF9F2',

    // Toolbar
    barBg: '#FFF9F2',
    barTextColor: '#211C1C',
    barSelectedColor: '#C1665E', 
    inputBg: '#FAFAFA'
  }),
});