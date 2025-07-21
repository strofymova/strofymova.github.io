import { useContext, useMemo } from 'react';
import { clsx } from 'clsx';
import { Theme, ThemeContext } from '../app/App';

export const useThemeStyles = (
  baseStyle: string,
  styles: {
    light: string;
    dark: string;
  }
) => {
  const { theme } = useContext(ThemeContext);

  return useMemo(
    () => clsx(baseStyle, theme === Theme.light ? styles.dark : styles.light),
    [baseStyle, styles.light, styles.dark, theme]
  );
};
