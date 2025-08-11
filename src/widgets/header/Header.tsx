import React from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import LocalizationSwitcher from '../localization/LocalizationSwitcher';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import AuthorizationButton from '../auth/AuthorizationButton';
import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

export const getClassName: NavLinkProps['className'] = ({ isActive }) => clsx(styles.link, isActive && styles.active);

export function Header(): React.ReactNode {
  const { t } = useTranslation();

  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  return (
    <div className={styleName}>
      <div className={styles.base}>
        <Logo />
        <div>FASHION</div>
        <LocalizationSwitcher></LocalizationSwitcher>
        <ThemeToggleButton></ThemeToggleButton>
        <AuthorizationButton />
      </div>
      <div className={styles.navigation}>
        <NavLink className={getClassName} to="/">
          {t('screens.main')}
        </NavLink>
        <NavLink className={getClassName} to="/auth">
          {t('screens.auth.title')}
        </NavLink>
        <NavLink className={getClassName} to="/profile">
          {t('screens.profile.title')}
        </NavLink>
        <NavLink className={getClassName} to="/basket">
          {t('screens.basket.title')}
        </NavLink>
      </div>
    </div>
  );
}
export default Header;
