import React, { forwardRef } from 'react';
import style from './product.module.css';
import Basket from '../basket/Basket';
import unknowImageUrl from '../../../stories/assets/custom-unknow-product.svg';
import ProductItem from './ProductItem';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../../hooks/useThemeStyles';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { basketActions, basketSelectors } from '../../../app/store/basket';
import { useDispatch, useSelector } from 'react-redux';
import { BasketProduct } from '../../../shared/server.types';

export interface IProduct {
  id: string;
  price: number;
  imageUrl: string | null;
  name: string;
  description: string;
  disable?: boolean;
  onClick?: (id: string) => void;
}

export const Product = forwardRef<HTMLDivElement, IProduct>(
  ({ id, price, imageUrl, name, description, disable, onClick }, ref) => {
    const { t } = useTranslation();
    const styleName = useThemeStyles(style.main, {
      light: style.light,
      dark: style.dark,
    });

    const dispatch = useDispatch();
    const basketItems = useSelector(basketSelectors.get);
    const productInBasket: BasketProduct | undefined = basketItems?.find(
      (basketProduct) => basketProduct.product.id === id
    );
    const _count = productInBasket?.count || 0;

    const handleIncrement = (count: number) => {
      dispatch(
        basketActions.add({
          product: { id, price, name, description, imageUrl },
          count: count,
        })
      );
    };

    const handleDecrement = (count: number) => {
      if (count > 1) {
        dispatch(
          basketActions.add({
            product: { id, price, name, description, imageUrl },
            count: count,
          })
        );
      } else {
        dispatch(basketActions.remove(id));
      }
    };
    return (
      <div className={styleName} ref={ref}>
        <div className={style.title}>
          {t('widgets.product.card')}
          {!disable && (
            <Button
              type="primary"
              icon={<EditOutlined className={style.edit_button} />}
              size="small"
              onClick={() => onClick(id)}
            />
          )}
        </div>
        <img className={style.img} src={imageUrl === null ? unknowImageUrl : imageUrl} />
        <div className={style.info}>
          <ProductItem title={t('widgets.product.cost')} value={price} />
          <ProductItem title={t('widgets.product.name')} value={name} />
          <ProductItem className={style.desc} title={t('widgets.product.description')} value={description} />
          <Basket
            initCount={_count}
            disabled={false}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </div>
      </div>
    );
  }
);

Product.displayName = 'Product';
export default Product;
