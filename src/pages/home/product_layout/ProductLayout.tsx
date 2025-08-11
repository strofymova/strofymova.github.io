import React from 'react';
import ProductLayoutContainer from './ProductLayoutContainer';

interface IProductLayoutProps {
  infinityScroll?: boolean;
}

const ProductLayout: React.FC<IProductLayoutProps> = ({ infinityScroll }: IProductLayoutProps): React.ReactNode => (
  <ProductLayoutContainer infinityScroll={infinityScroll} />
);

export default ProductLayout;
