import React from 'react';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import { store } from './store';

import { ClientProvider } from './client';
import type { Meta } from '@storybook/react-webpack5';

export default {
  title: 'Components/AppContainer',
  component: AppContainer,
  decorators: [
    (Story) => (
      <ClientProvider>
        <Provider store={store}>
          <Story />
        </Provider>
      </ClientProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AppContainer>;

export const Default = () => <AppContainer />;
