import { useMutation } from '@apollo/client';
import { Button, message } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { basketActions, basketSelectors } from '../../app/store/basket';
import { createErrorHandlers } from '../../core/utility/createErrorHandlers';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { OrderAddInput } from '../../shared/orders.types';
import { ADD_ORDER, AddOrderResponse, AddOrderVars } from '../../widgets/order_list/mutations';
import Layout from '../../widgets/layout/Layout';
import styles from './basket.module.css';
import BasketList from './BasketList';

const Basket: React.FC = () => {
  const { t } = useTranslation();
  const styleNameBtn = useThemeStyles(styles.button, {
    light: styles.light,
    dark: styles.dark,
  });

  const basketProducts = useSelector(basketSelectors.get);

  const dispatcher = useDispatch();
  const [insertOrder] = useMutation<AddOrderResponse, AddOrderVars>(ADD_ORDER, {
    fetchPolicy: 'no-cache',
  });

  const { catcher } = createErrorHandlers((code, _, error) => {
    if (code === null) {
      message.error(t(`errors.${error.message}`));
    } else {
      message.error(t(`errors.${code}`));
    }
  });

  const handleOnClick = () => {
    const inputData: OrderAddInput = {
      products: basketProducts.map((basketProduct) => ({
        id: basketProduct.product.id,
        quantity: basketProduct.count,
      })),
      status: 'PendingConfirmation',
    };
    insertOrder({ variables: { input: inputData } })
      .then((res) => {
        if (res && res.data) {
          message.success(t('widgets.orders.success'));
          dispatcher(basketActions.clear());
        }
      })
      .catch(catcher);
  };

  return (
    <Layout>
      <BasketList />
      <Button className={styleNameBtn} type="primary" onClick={handleOnClick}>
        {' '}
        {t('screens.basket.send_order')}{' '}
      </Button>
    </Layout>
  );
};

export default Basket;
