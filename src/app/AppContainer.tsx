import React, { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Locale } from '../widgets/localization/settings';

import AppComponent from './AppComponent';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

export interface IThemeContextProviderProps {
  theme: Theme;
  handleSwitchTheme?: () => void;
}
export const ThemeContext = createContext<IThemeContextProviderProps>({} as IThemeContextProviderProps);

export interface ILocaleContextProviderProps {
  locale: Locale;
  handleSwitchLocale?: (newValue: Locale) => void;
}
export const LocaleContext = createContext<ILocaleContextProviderProps>({} as ILocaleContextProviderProps);

const AppContainer = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const [locale, setLocale] = useState<Locale>(Locale.ru);
  const { i18n } = useTranslation();

  const handleSwitchTheme = () => {
    setTheme((prev) => (prev === Theme.light ? Theme.dark : Theme.light));
  };

  const handleSwitchLocale = (newValue: Locale) => {
    setLocale(newValue);
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <LocaleContext.Provider value={{ locale, handleSwitchLocale }}>
      <ThemeContext.Provider value={{ theme, handleSwitchTheme }}>
        <AppComponent />
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
};

export default AppContainer;
