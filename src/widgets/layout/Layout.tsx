import React, { useCallback, useContext, useEffect, useState } from 'react';
import Header from '../header/Header';
import styles from './layout.module.css';
import { ProductList } from '../product_list/ProductList';
import { IProduct } from '../marketplace/products/Product';
import { getIProduct, getIProducts } from '../../utility/GeneratorUtil';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../hooks/useThemeStyles';

export function Layout(): React.ReactNode {
  const { t } = useTranslation();
  const styleName = useThemeStyles(styles.main, {
    light: styles.light,
    dark: styles.dark,
  });

  const [products, setProducts] = useState<IProduct[]>(getIProducts(12));

  const handleShowMore = () => {
    setProducts((prevProducts) => [...prevProducts, getIProduct()]);
  };

  const handleOnIntersection = () => {
    setProducts((prevProducts) => [...prevProducts, ...getIProducts(4)]);
  };

  return (
    <div className={styleName}>
      <Header />
      <ProductList products={products} className={styles.products} onIntersection={handleOnIntersection} />
      <button className={styles.showMoreBtn} onClick={handleShowMore}>
        {t('widgets.product.showMore')}
      </button>
    </div>
  );
}
export default Layout;
