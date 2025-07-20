import React from 'react';
import style from './product.module.css';
import clsx from 'clsx';

interface IProductItemProps {
  title: string;
  value: string | number;
  className?: string;
}

export function ProductItem({ title, value, className }: IProductItemProps) {
  return (
    <div className={clsx(className, style.item)}>
      <div className={style.item_title}>{title}</div>
      <div className={style.item_value}>{value}</div>
    </div>
  );
}
export default ProductItem;
