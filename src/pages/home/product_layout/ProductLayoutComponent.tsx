import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './product_layout.module.css';
import { ProductList } from '../../../widgets/product_list/ProductList';
import FilterLayout from '../../../widgets/filter/FilterLayout';
import { useThemeStyles } from '../../../hooks/useThemeStyles';

interface IProductLayoutComponentProps {
  onShowMore: () => void;
  onIntersection: () => void;
  infinityScroll?: boolean;
}

const ProductLayoutComponent: React.FC<IProductLayoutComponentProps> = ({
  onShowMore,
  onIntersection,
  infinityScroll,
}) => {
  const { t } = useTranslation();
  const minWidthFilter = 200;
  const containerRef = useRef<HTMLDivElement>(null);
  const [productListStyle, setProductListStyle] = useState(styles.products);
  const styleName = useThemeStyles(styles.showMoreBtn, {
    light: styles.light,
    dark: styles.dark,
  });

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
        <ProductList className={productListStyle} onIntersection={onIntersection} infinityScroll={infinityScroll} />
        <FilterLayout ref={containerRef} />
      </div>
      <button className={styleName} onClick={onShowMore}>
        {t('widgets.product.showMore')}
      </button>
    </>
  );
};

export default ProductLayoutComponent;
