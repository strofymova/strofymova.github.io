import React from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';
import ThemeToggleButton from '../theme/ThemeToggleButton';
import LocalizationSwitcher from '../localization/LocalizationSwitcher';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { tokenSelectors } from '../../app/store/token';
import { useQuery } from '@apollo/client';
import { GET_PROFILE, GetProfileResponse } from '../../app/store/sagas/token/connections';
import { profileActions } from '../../app/store/profile';
import { message } from 'antd';

export const getClassName: NavLinkProps['className'] = ({ isActive }) => clsx(styles.link, isActive && styles.active);

export function Header(): React.ReactNode {
  const { t } = useTranslation();

  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const isAuth = token != null && token != undefined;

  const dispatch = useDispatch();
  useQuery<GetProfileResponse>(GET_PROFILE, {
    onCompleted: (data) => {
      if (isAuth && data.profile) {
        dispatch(profileActions.set(data.profile));
      }
    },
    onError: (error) => {
      if (isAuth) {
        message.error(t(`errors.${error.message}`));
      }
    },
    fetchPolicy: 'network-only',
  });

  return (
    <div className={styleName}>
      <div className={styles.base}>
        <Logo />
        <div>FASHION</div>
        <LocalizationSwitcher />
        <ThemeToggleButton />
      </div>
      <div className={styles.navigation}>
        <NavLink className={getClassName} to="/">
          {t('screens.main')}
        </NavLink>
        <NavLink className={getClassName} to="/basket">
          {t('screens.basket.title')}
        </NavLink>
        {!isAuth && (
          <NavLink className={getClassName} to="/auth">
            {t('screens.auth.authTitle')}
          </NavLink>
        )}
        {isAuth && (
          <NavLink className={getClassName} to="/profile">
            {t('screens.profile.title')}
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default Header;
