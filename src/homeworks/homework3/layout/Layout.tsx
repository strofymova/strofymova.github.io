import React from 'react';
import Header from '../header/Header';
import styles from './layout.module.css';

class Layout extends React.Component {
  render() {
    const child = this.props;
    return (
      <div className={styles.main}>
        <Header />
      </div>
    );
  }
}
export default Layout;
