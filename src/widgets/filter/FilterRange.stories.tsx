import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FilterRangeContainer from './FilterRangeContainer';
import { FilterRangeStory } from './FilterRangeStory';

export default {
  title: 'Components/FilterRangeContainer',
  component: FilterRangeContainer,
  argTypes: {
    min: {
      control: { type: 'number', min: -1000, max: 1000, step: 1 },
    },
    max: {
      control: { type: 'number', min: -1000, max: 1000, step: 1 },
    },
    valueMin: {
      control: { type: 'number' },
    },
    valueMax: {
      control: { type: 'number' },
    },
  },
  decorators: [(Story) => <Story />],
  tags: ['autodocs'],
} as Meta<typeof FilterRangeStory>;

type Story = StoryObj<typeof FilterRangeStory>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    valueMin: 20,
    valueMax: 80,
  },
};

export const NegativeRange: Story = {
  args: {
    min: -100,
    max: 100,
    valueMin: -50,
    valueMax: 50,
  },
};
