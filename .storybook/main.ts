import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-styling-webpack"
  ],
  framework: '@storybook/angular', // 👈 Add this
  staticDirs: ['../public'],
};

export default config;