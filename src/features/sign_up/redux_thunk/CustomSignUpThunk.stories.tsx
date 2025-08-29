import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../api/redux_thunk/store/store';
import CustomSignUpThunk from './CustomSignUpThunk';

export default {
  title: 'Widgets/CustomSignUpThunk',
  component: CustomSignUpThunk,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn = (args) => (
  <div style={{ padding: '20px', border: '1px dashed #033519ff' }}>
    <Provider store={store}>
      <CustomSignUpThunk {...args} />
    </Provider>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
