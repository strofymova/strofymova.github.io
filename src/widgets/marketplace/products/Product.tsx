import React, { forwardRef, MutableRefObject, RefObject, useContext, useEffect, useState } from 'react';
import style from './product.module.css';
import Basket from '../basket/Basket';
import unknowImageUrl from '../../../stories/assets/custom-unknow-product.svg';
import ProductItem from './ProductItem';
import { useTranslation } from 'react-i18next';
import { Theme, ThemeContext } from '../../../app/App';
import clsx from 'clsx';

export interface IProduct {
  price: number;
  imageUrl: string | null;
  name: string;
  description: string;
  disable?: boolean;
}

export const Product = forwardRef<HTMLDivElement, IProduct>(({ price, imageUrl, name, description, disable }, ref) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [styleName, setStyleName] = useState(clsx(style.main, theme === Theme.light ? style.dark : style.light));
  useEffect(() => {
    setStyleName(clsx(style.main, theme === Theme.light ? style.dark : style.light));
  }, [theme]);

  return (
    <div className={styleName} ref={ref}>
      <div className={style.title}>{t('widgets.product.card')}</div>
      <img className={style.img} src={imageUrl === null ? unknowImageUrl : imageUrl} />
      <div className={style.info}>
        <ProductItem title={t('widgets.product.cost')} value={price} />
        <ProductItem title={t('widgets.product.name')} value={name} />
        <ProductItem className={style.desc} title={t('widgets.product.description')} value={description} />
        <Basket initCount={0} disabled={disable && true}></Basket>
      </div>
    </div>
  );
});

Product.displayName = 'Product';
export default Product;
