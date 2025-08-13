import React from 'react';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import styles from './layout.module.css';
import Header from '../header/Header';

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });
  return (
    <div className={styleName}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
