import React, { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import LocalizationSwitcher from '../localization/LocalizationSwitcher';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import AuthorizationButton from '../auth/AuthorizationButton';
import { useSelector } from 'react-redux';
import { tokenSelectors } from 'src/app/store/token';
import { RootState } from 'src/app/store';

export function Header(): React.ReactNode {
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [isAuthorizated, setAuthorizated] = useState(token !== null);
  useEffect(() => {
    setAuthorizated(token !== null);
  }, [token]);

  return (
    <div className={styleName}>
      <Logo />
      <div>FASHION</div>
      <LocalizationSwitcher></LocalizationSwitcher>
      <ThemeToggleButton></ThemeToggleButton>
      <AuthorizationButton isAuthorizated={isAuthorizated} />
    </div>
  );
}
export default Header;
