import React from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css'
import ThemeToggleButton from '../theme/ThemeToggleButton'
import LocalizationSwitcher from '../localization/LocalizationSwitcher';

export function Header (): React.ReactNode {
    return (
    <div className={styles.main}>
        <Logo/>
        <div>FASHION</div>
        <LocalizationSwitcher></LocalizationSwitcher>
        <ThemeToggleButton></ThemeToggleButton>
    </div>
    )
}
export default Header;
