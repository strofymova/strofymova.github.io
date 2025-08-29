const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/preset-scss",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  env: (config) => ({
    ...config,
    REACT_APP_API_BASE_URL:'http://19429ba06ff2.vps.myjino.ru/api',
    REACT_APP_API_TIMEOUT:10000,
    REACT_APP_COMMAND_ID:'storybook-s_trofymova_dev',
  }),
};
export default config;
