import React from 'react';
import Logo from '../logo/Logo';
import styles from './header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Logo />
        <div>FASHION</div>
      </div>
    );
  }
}
export default Header;
