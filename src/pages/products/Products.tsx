import React from 'react';
import Layout from '../../widgets/layout/Layout';
import ProductLayout from '../products/product_layout/ProductLayout';

const Products: React.FC = () => (
  <Layout>
    <ProductLayout infinityScroll={true} />
  </Layout>
);

export default Products;
