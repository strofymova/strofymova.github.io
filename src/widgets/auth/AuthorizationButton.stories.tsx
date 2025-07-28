import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Initializer } from '../../app/store/Initializer';
import { LocaleContext } from '../../app/AppContainer';
import { Locale } from '../localization/settings';
import AuthorizationButton from './AuthorizationButton';
import { ClientProvider } from '../../app/client';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

const meta: Meta<typeof AuthorizationButton> = {
  title: 'Components/AuthorizationButton',
  component: AuthorizationButton,
  decorators: [
    (Story) => (
      <LocaleContext.Provider value={{ locale: Locale.ru }}>
        <ClientProvider>
          <Provider store={store}>
            <Initializer />
            <Story />
          </Provider>
        </ClientProvider>
      </LocaleContext.Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { 
  },
};

export default meta;
type Story = StoryObj<typeof AuthorizationButton>;

export const Default: Story = {
  args: {
  },
};
