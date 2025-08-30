import React from 'react';
import Layout from '../../widgets/layout/Layout';
import ProductLayout from './product_layout/ProductLayout';

const Home: React.FC = () => (
  <Layout>
    <ProductLayout infinityScroll={false} />
  </Layout>
);

export default Home;
