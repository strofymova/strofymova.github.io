import React, { ReactNode, useEffect, useState } from 'react';
import { LocaleContext } from '../../app/AppContainer';
import { Locale } from './settings';
import { useTranslation } from 'react-i18next';

interface ILocalizationProviderProps {
  children: ReactNode;
  initialLocale?: Locale;
}

export const LocalizationProvider: React.FC<ILocalizationProviderProps> = ({ children, initialLocale }) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const { i18n } = useTranslation();
  const handleSwitchLocale = (newValue: Locale) => {
    setLocale(newValue);
  };
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  useEffect(() => {
    setLocale(initialLocale);
  }, [initialLocale]);

  return (
    <div style={{ height: '100vh' }}>
      <LocaleContext.Provider value={{ locale, handleSwitchLocale }}>{children}</LocaleContext.Provider>
    </div>
  );
};

export default LocalizationProvider;
