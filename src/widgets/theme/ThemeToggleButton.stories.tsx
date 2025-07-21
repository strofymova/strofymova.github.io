import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { Theme } from '../../app/App';
import ThemeProvider from './ThemeProvider';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

type StoryContext = {
  args: {
    initialTheme?: Theme;
  };
};

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'Components/ThemeToggleButton',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  decorators: [
    (Story, context: StoryContext) => (
      <ThemeProvider initialTheme={context.args.initialTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    initialTheme: {
      control: {
        type: 'radio',
      },
      options: [Theme.light, Theme.dark],
      description: 'Initial theme for the provider',
    },
  },
} satisfies Meta<typeof ThemeToggleButton>;

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

export const Default: Story = {
  args: {
    initialTheme: Theme.light,
  },
};

export const LightTheme: Story = {
  args: {
    initialTheme: Theme.light,
  },
};

export const DarkTheme: Story = {
  args: {
    initialTheme: Theme.dark,
  },
};
