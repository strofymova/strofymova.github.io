import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProductLayoutContainer from './ProductLayoutContainer';
import { ClientProvider } from '../../../app/client';
import { store } from '../../../app/store';
import { Provider } from 'react-redux';

const meta: Meta<typeof ProductLayoutContainer> = {
  title: 'Components/ProductLayoutContainer',
  component: ProductLayoutContainer,
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
  argTypes: {
    infinityScroll: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof ProductLayoutContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    infinityScroll: true,
  },
};

export const WithoutInfinityScroll: Story = {
  args: {
    infinityScroll: false,
  },
};
