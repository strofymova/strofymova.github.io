import React from 'react';
import { useSelector } from 'react-redux';
import { basketSelectors } from 'src/app/store/basket';
import { BasketProduct } from 'src/shared/server.types';
import Layout from 'src/widgets/layout/Layout';

const Basket: React.FC = () => {
  const products: BasketProduct[] = useSelector(basketSelectors.get);
  const totalPrice = useSelector(basketSelectors.getTotalPrice);
  return (
    <Layout>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((basketProduct) => (
          <li
            key={basketProduct.product.id}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              {basketProduct.product.id} {basketProduct.product.name}
            </span>
            <span>
              {basketProduct.product.price} x {basketProduct.count} ={' '}
              {basketProduct.product.price * basketProduct.count} ₽
            </span>
          </li>
        ))}
        <li
          style={{
            fontWeight: 'bold',
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>Итого: </span>
          <span>{totalPrice} ₽</span>
        </li>
      </ul>
    </Layout>
  );
};

export default Basket;
