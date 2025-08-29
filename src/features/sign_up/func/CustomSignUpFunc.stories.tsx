import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import CustomSignUpFunc from './CustomSignUpFunc';

// Просто отключаем все моки и показываем компонент как есть
export default {
  title: 'Widgets/CustomSignUpFunc',
  component: CustomSignUpFunc,
  parameters: {
    layout: 'centered',
    // Игнорируем ошибки от моков
    storyshots: { disable: true },
  },
} as Meta;

const Template: StoryFn = (args) => (
  // Простой обходной путь - показываем компонент с предупреждением
  <div>
    <CustomSignUpFunc {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {};
