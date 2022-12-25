module.exports = {
  stories: ["../src/app/**/*.stories.ts"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  features: {
    interactionsDebugger: true
  },
  docs: {
    docsPage: "automatic"
  }
};
