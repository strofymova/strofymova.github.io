import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ModalManager from './ModalManager';

const meta: Meta<typeof ModalManager> = {
  title: 'Components/ModalManager',
  component: ModalManager,
  tags: ['autodocs'],
  argTypes: {
    initialText: {
      control: 'text',
      description: 'Initial text in the input field',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalManager>;

export const WithControls: Story = {
  args: {
    initialText: 'Default text',
  },
};
