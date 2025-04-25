import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    visible: {
      control: 'boolean',
      defaultValue: true,
    },
    children: {
      control: 'text',
      defaultValue: 'Modal content goes here',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    visible: true,
    children: 'Содержимое модального окна',
  },
};

export const WithHTMLContent: Story = {
  args: {
    visible: true,
    children: (
      <div>
        <h2>Заголовок модального окна</h2>
        <p>Это HTML контент модального окна</p>
        <button>Это просто кнопка</button>
      </div>
    ),
  },
};
