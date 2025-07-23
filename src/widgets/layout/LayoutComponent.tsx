import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import Header from '../header/Header';
import { ProductList } from '../product_list/ProductList';
import styles from './layout.module.css';
import { IProduct } from '../marketplace/products/Product';
import FilterLayout from '../filter/FilterLayout';

interface ILayoutComponentProps {
  products: IProduct[];
  onShowMore: () => void;
  onIntersection: () => void;
}

const LayoutComponent: React.FC<ILayoutComponentProps> = ({ products, onShowMore, onIntersection }) => {
  const { t } = useTranslation();
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  return (
    <div className={styleName}>
      <Header />
      <div className={styles.contentContainer}>
        <ProductList products={products} className={styles.products} onIntersection={onIntersection} />
        <FilterLayout></FilterLayout>
      </div>
      <button className={styles.showMoreBtn} onClick={onShowMore}>
        {t('widgets.product.showMore')}
      </button>
    </div>
  );
};

export default LayoutComponent;
