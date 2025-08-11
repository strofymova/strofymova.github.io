import type { Meta, StoryObj } from '@storybook/react';
import ProductLayoutContainer from './ProductLayoutContainer';
const meta: Meta<typeof ProductLayoutContainer> = {
  title: 'Components/ProductLayoutContainer',
  component: ProductLayoutContainer,
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
