import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './product_layout.module.css';
import { IProduct } from '../../../widgets/marketplace/products/Product';
import { ProductList } from '../../../widgets/product_list/ProductList';
import FilterLayout from '../../../widgets/filter/FilterLayout';

interface IProductLayoutComponentProps {
  products: IProduct[];
  onShowMore: () => void;
  onIntersection: () => void;
  infinityScroll?: boolean;
}

const ProductLayoutComponent: React.FC<IProductLayoutComponentProps> = ({
  products,
  onShowMore,
  onIntersection,
  infinityScroll,
}) => {
  const { t } = useTranslation();
  const minWidthFilter = 200;
  const containerRef = useRef<HTMLDivElement>(null);
  const [productListStyle, setProductListStyle] = useState(styles.products);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const widthFilter = entry.contentRect.width;
        if (widthFilter < minWidthFilter && productListStyle === styles.productsSmall) {
          setProductListStyle(styles.products);
        } else if (widthFilter >= minWidthFilter && productListStyle === styles.products) {
          setProductListStyle(styles.productsSmall);
        }
      }
    });

    observer.observe(containerRef.current);
  }, [productListStyle]);

  return (
    <>
      <div className={styles.contentContainer}>
        <ProductList
          products={products}
          className={productListStyle}
          onIntersection={onIntersection}
          infinityScroll={infinityScroll}
        />
        <FilterLayout ref={containerRef}></FilterLayout>
      </div>
      <button className={styles.showMoreBtn} onClick={onShowMore}>
        {t('widgets.product.showMore')}
      </button>
    </>
  );
};

export default ProductLayoutComponent;
