import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { StoreProvider } from '../api/react_toolkit_query/StoreProvider';
import CustomSignUpRTK from './CustomSignUpRTK';

export default {
  title: 'Widgets/CustomSignUpRTK',
  component: CustomSignUpRTK,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ padding: '20px', border: '1px dashed #ccc' }}>
    <StoreProvider>
      <CustomSignUpRTK {...args} />
    </StoreProvider>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
