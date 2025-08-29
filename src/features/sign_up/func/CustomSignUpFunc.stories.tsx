import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import CustomSignUpFunc from './CustomSignUpFunc';

export default {
  title: 'Widgets/CustomSignUpFunc',
  component: CustomSignUpFunc,
  parameters: {
    layout: 'centered',
    storyshots: { disable: true },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div>
    <CustomSignUpFunc {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {};
