import React, { useContext, useEffect, useState} from 'react';
import Header from '../header/Header'
import styles from './layout.module.css'
import {Theme, ThemeContext } from '../../app/App'
import clsx from 'clsx';

export function Layout (): React.ReactNode {
    const {theme} = useContext(ThemeContext);
    const [styleName, setStyleName] = useState(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
    useEffect(() => {
        setStyleName(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
    }, [theme]);
    return (
            <div className={styleName}>
                <Header/>
            </div>
    )
}
export default Layout;