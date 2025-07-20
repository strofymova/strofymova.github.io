import React, { useContext, useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import LocalizationSwitcher from '../localization/LocalizationSwitcher';
import clsx from 'clsx';
import { Theme, ThemeContext } from '../../app/App';

export function Header(): React.ReactNode {
  const { theme } = useContext(ThemeContext);
  const [styleName, setStyleName] = useState(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
  useEffect(() => {
    setStyleName(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
  }, [theme]);

  return (
    <div className={styleName}>
      <Logo />
      <div>FASHION</div>
      <LocalizationSwitcher></LocalizationSwitcher>
      <ThemeToggleButton></ThemeToggleButton>
    </div>
  );
}
export default Header;
