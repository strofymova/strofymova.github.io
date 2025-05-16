import React from 'react';
import Header from '../header/Header'
import styles from './layout.module.css'

export function Layout() {
      return (
            <div className={styles.main}>
                <Header/>
            </div>
      )
}
export default Layout;