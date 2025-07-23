import type { Meta, StoryObj } from '@storybook/react';
import LayoutContainer from './LayoutContainer';
const meta: Meta<typeof LayoutContainer> = {
  title: 'Components/LayoutContainer',
  component: LayoutContainer,
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
} satisfies Meta<typeof LayoutContainer>;

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
