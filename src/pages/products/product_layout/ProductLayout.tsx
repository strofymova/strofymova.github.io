import React from 'react';
import ProductLayoutContainer from './ProductLayoutContainer';

interface IProductLayoutProps {
  infinityScroll?: boolean;
}

const ProductLayout: React.FC<IProductLayoutProps> = React.memo(
  ({ infinityScroll }: IProductLayoutProps): React.ReactNode => (
    <ProductLayoutContainer infinityScroll={infinityScroll} />
  )
);

ProductLayout.displayName = 'ProductLayout';
export default ProductLayout;
