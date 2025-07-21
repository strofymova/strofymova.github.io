import React, { useContext, useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import LocalizationSwitcher from '../localization/LocalizationSwitcher';
import { useThemeStyles } from '../../hooks/useThemeStyles';

export function Header(): React.ReactNode {
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

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
