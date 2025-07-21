import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LocalizationSwitcher from './LocalizationSwitcher';
import { Locale } from './settings';
import LocalizationProvider from './LocalizationProvider';
import { useTranslation } from 'react-i18next';

type StoryContext = {
  args: {
    initialLocale?: Locale;
  };
};

const TranslatedContent = () => {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '4px' }}>
      <h3>{t('welcome')}</h3>
      <p>{t('description')}</p>
    </div>
  );
};

const meta: Meta<typeof LocalizationSwitcher> = {
  title: 'Components/LocalizationSwitcher',
  component: LocalizationSwitcher,
  tags: ['autodocs'],
  decorators: [
    (Story, context: StoryContext) => (
      <LocalizationProvider initialLocale={context.args.initialLocale}>
        <Story />
        <TranslatedContent />
      </LocalizationProvider>
    ),
  ],
  argTypes: {
    initialLocale: {
      control: {
        type: 'select',
      },
      options: [Locale.en, Locale.ru],
      description: 'Initial locale for the provider',
    },
  },
} satisfies Meta<typeof LocalizationSwitcher>;

export default meta;

type Story = StoryObj<typeof LocalizationSwitcher>;

export const Default: Story = {
  args: {
    initialLocale: Locale.en,
  },
};

export const RuInitialValue: Story = {
  args: {
    initialLocale: Locale.ru,
  },
};
