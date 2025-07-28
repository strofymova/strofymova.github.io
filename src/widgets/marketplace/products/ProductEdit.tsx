import React from 'react';
import style from './product.module.css';
import ProductEditItem from './ProductEditItem';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../../hooks/useThemeStyles';
import { IProduct } from './Product';
import unknowImageUrl from '../../../stories/assets/custom-unknow-product.svg';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { Button } from 'antd';
import { clsx } from 'clsx';

export interface IProductEdit extends IProduct {
  onSave?: (editProduct: IProduct) => void;
}

export function ProductEdit({ id, price, imageUrl, name, description, onSave }: IProductEdit) {
  const { t } = useTranslation();
  const styleName = useThemeStyles(style.main, {
    light: style.light,
    dark: style.dark,
  });

  const sourceProduct = {
    id,
    price,
    name,
    description,
    imageUrl,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProduct>({
    values: sourceProduct,
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IProduct> = (data) => {
    console.log('Submitted data:', JSON.stringify(data));
    if (onSave) {
      onSave(data);
    }
  };

  return (
    <form className={clsx(styleName, style.edit)} onSubmit={handleSubmit(onSubmit)}>
      <img className={style.img} src={unknowImageUrl} />
      <div className={style.info}>
        <ProductEditItem {...register((name = 'price'))} type="number" step="0.01" title={t('widgets.product.cost')} />
        <ProductEditItem
          {...register((name = 'name'), { required: { value: true, message: t('errors.is_required') } })}
          type="string"
          title={t('widgets.product.name')}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <ProductEditItem
          {...register((name = 'description'), { maxLength: { value: 100, message: t('errors.invalid_description') } })}
          type="string"
          className={clsx(style.product_edit_item, style.desc)}
          title={t('widgets.product.description')}
        />
        {errors.description && <span>{errors.description.message}</span>}
        <div>
          <Button className={style.button} htmlType="submit">
            {t('widgets.save')}
          </Button>
        </div>
      </div>
    </form>
  );
}

ProductEdit.displayName = 'ProductEdit';
export default ProductEdit;
