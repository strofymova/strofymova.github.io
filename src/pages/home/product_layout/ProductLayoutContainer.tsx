import React, { useCallback } from 'react';
import ProductLayoutComponent from './ProductLayoutComponent';
import { getIProducts } from '../../../core/utility/GeneratorUtil';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions, productsSelectors } from 'src/app/store/products';

interface IProductLayoutContainerProps {
  infinityScroll?: boolean;
}

const ProductLayoutContainer: React.FC<IProductLayoutContainerProps> = ({
  infinityScroll,
}: IProductLayoutContainerProps) => {
  const products = useSelector(productsSelectors.get);
  const dispatcher = useDispatch();

  const loadProducts = useCallback(
    (count: number) => {
      dispatcher(productsActions.add(getIProducts(count)));
    },
    [dispatcher]
  );

  return (
    <ProductLayoutComponent
      products={products}
      onShowMore={() => loadProducts(1)}
      onIntersection={() => loadProducts(4)}
      infinityScroll={infinityScroll}
    />
  );
};

export default ProductLayoutContainer;
