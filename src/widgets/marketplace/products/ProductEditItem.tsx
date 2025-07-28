import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import style from './product.module.css';
import { clsx } from 'clsx';
import type { UseFormRegister } from 'react-hook-form';
import { IProduct } from './Product';

export interface IProductEditItemProps {
  name: string;
  title: string;
  className?: string;
  type?: string;
  step?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

export const ProductEditItem = forwardRef<
  HTMLInputElement,
  IProductEditItemProps & ReturnType<UseFormRegister<IProduct>>
>(({ name, title, className, type, step, onBlur, onChange }: IProductEditItemProps, ref) => (
  <div className={clsx(className, style.item)}>
    <div className={style.item_title}>{title}</div>
    <input
      name={name}
      ref={ref}
      type={type}
      step={step}
      className={style.item_value_input}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
));
ProductEditItem.displayName = 'ProductEditItem';
export default ProductEditItem;
