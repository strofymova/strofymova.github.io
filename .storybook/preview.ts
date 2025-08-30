import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  initialGlobals : {
    env: {
      REACT_APP_COMMAND_ID: 'storybook-s_trofymova_dev',
      REACT_APP_API_BASE_URL: 'http://19429ba06ff2.vps.myjino.ru/api',
      REACT_APP_API_TIMEOUT: '10000',
      NODE_ENV: 'development',
    },
  },
};


export default preview;
