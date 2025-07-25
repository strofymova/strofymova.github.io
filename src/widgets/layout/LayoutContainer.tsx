import React, { useCallback, useState } from 'react';
import LayoutComponent from './LayoutComponent';
import { IProduct } from '../marketplace/products/Product';
import { getIProducts } from '../../utility/GeneratorUtil';

const LayoutContainer: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>(getIProducts(8));

  const loadProducts = useCallback((count: number) => {
    setProducts((prevProducts) => [...prevProducts, ...getIProducts(count)]);
  }, []);

  return (
    <LayoutComponent products={products} onShowMore={() => loadProducts(1)} onIntersection={() => loadProducts(4)} />
  );
};

export default LayoutContainer;
