import React from 'react';
import LayoutContainer from './LayoutContainer';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import styles from './layout.module.css';
import Header from '../header/Header';

interface ILayoutProps {
  infinityScroll?: boolean;
}

const Layout: React.FC<ILayoutProps> = ({ infinityScroll }: ILayoutProps): React.ReactNode => {
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });
  return (
    <div className={styleName}>
      <Header />
      <LayoutContainer infinityScroll={infinityScroll} />
    </div>
  );
};

export default Layout;
