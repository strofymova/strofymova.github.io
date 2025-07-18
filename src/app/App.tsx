import React, { ChangeEvent, createContext, useEffect, useInsertionEffect, useState } from 'react';
import './App.css';
import Layout from '../homeworks/homework3/layout/Layout'
import { useTranslation } from 'react-i18next';
import { Locale } from '../stories/homework4/localization/settings';

export const ThemeContext = createContext<IThemeContextProviderProps>({} as IThemeContextProviderProps);

export const LocaleContext = createContext<ILocaleContextProviderProps>({} as ILocaleContextProviderProps);

export enum Theme {
    light='light',
    dark = 'dark'
}
export interface IThemeContextProviderProps {
    theme: Theme;
    handleSwitchTheme?:() => void;
}

export interface ILocaleContextProviderProps {
    locale: Locale;
    handleSwitchLocale?:(newValue: Locale) => void;
}

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  const handleSwitchTheme = () => {
    setTheme(prev => prev === Theme.light ? Theme.dark : Theme.light);
  };

  const [locale, setLocale] = useState<Locale>(Locale.ru);
  const { i18n } = useTranslation();
  const handleSwitchLocale = (newValue: Locale) => {
    setLocale(newValue);
  }
  useEffect(() => {
        i18n.changeLanguage(locale);
  }, [locale]);


  return (
    <LocaleContext.Provider value={{locale, handleSwitchLocale}}>
        <ThemeContext.Provider value={{theme, handleSwitchTheme}}>
            <Layout></Layout>
        </ThemeContext.Provider>
    </LocaleContext.Provider>
  );
}

export default App;
