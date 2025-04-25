import React from 'react';
import clsx from 'clsx';
import style from './product.module.css';
import Basket from '../basket/Basket';
import unknowImageUrl from '../../../../stories/assets/custom-unknow-product.svg';

export interface IProduct {
  price: number;
  imageUrl: string | null;
  name: string;
  description: string;
  disable?: boolean;
}

interface IProductItemProps {
  title: string;
  value: string | number;
  className?: string;
}

export function ProductItem(props: IProductItemProps): React.ReactElement {
  return (
    <div className={clsx(props.className, style.item)}>
      <div className={style.item_title}>{props.title}</div>
      <div className={style.item_value}>{props.value}</div>
    </div>
  );
}

export function Product(product: IProduct): React.ReactNode {
  return (
    <div className={style.main}>
      <div className={style.title}>Карточка товара</div>
      <img className={style.img} src={product.imageUrl === null ? unknowImageUrl : product.imageUrl} />
      <div className={style.info}>
        <ProductItem title="Стоимость" value={product.price} />
        <ProductItem title="Название" value={product.name} />
        <ProductItem className={style.desc} title="Описание" value={product.description} />
        <Basket initCount={0} disabled={product.disable && true}></Basket>
      </div>
    </div>
  );
}
