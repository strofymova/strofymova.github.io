import React from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css'

export function Header() {
      return (
        <div className={styles.main}>
            <Logo/>
            <div>FASHION</div>
        </div>
      )
}
export default Header;