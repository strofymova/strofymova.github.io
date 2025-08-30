import React from 'react';
import style from './product_detailed.module.css';
import { IProductCardProps } from './Product';
import unknowImageUrl from '../../../stories/assets/custom-unknow-product.svg';
import Basket from '../basket/Basket';
import ProductItem from './ProductItem';
import { useTranslation } from 'react-i18next';

export function ProductDetailed({ product: { category, desc, photo, name, price }, disable }: IProductCardProps) {
  const { t } = useTranslation();
  const initCount = 0;
  const currentImageUrl = photo === null ? String(unknowImageUrl) : photo;
  return (
    <div className={style.main}>
      <div className={style.title}>{t('widgets.product.cardDetailedTitle')}</div>
      <img className={style.img} src={currentImageUrl} />
      <div className={style.info}>
        <ProductItem className={style.price} title={t('widgets.product.cost')} value={price} />
        <ProductItem className={style.category} title={t('widgets.product.category')} value={category.name} />
        <ProductItem className={style.name} title={t('widgets.product.name')} value={name} />
        <ProductItem className={style.desc} title={t('widgets.product.description')} value={desc} />
        <Basket className={style.basket_btn} initCount={initCount} disabled={disable} />
      </div>
    </div>
  );
}

export default ProductDetailed;
