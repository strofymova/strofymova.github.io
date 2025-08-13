import React from 'react';
import style from './product.module.css';
import ProductEditItem from './ProductEditItem';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from '../../../hooks/useThemeStyles';
import { IProduct } from './Product';
import unknowImageUrl from '../../../stories/assets/custom-unknow-product.svg';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from 'antd';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../../app/store/products';

const productSchema = z.object({
  id: z.string(),
  name: z.string().nonempty('errors.is_required'),
  price: z.number().min(0.01, 'errors.invalid_price'),
  description: z.string().max(100, 'errors.invalid_description'),
  imageUrl: z.null() || z.string(),
});

type ProductFormData = z.infer<typeof productSchema>;

export interface IProductEdit extends IProduct {
  onSave?: (editProduct: IProduct) => void;
}

export function ProductEdit({ id, price, imageUrl, name, description, onSave }: IProductEdit) {
  const { t } = useTranslation();
  const styleName = useThemeStyles(style.main, {
    light: style.light,
    dark: style.dark,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: { id, price, name, description, imageUrl },
    mode: 'onBlur',
  });

  const dispatcher = useDispatch();
  const onSubmit: SubmitHandler<ProductFormData> = (data) => {
    console.log('Submitted data:', data);
    const productData: IProduct = {
      id: data.id,
      name: data.name,
      price: data.price,
      description: data.description,
      imageUrl: data.imageUrl,
    };
    dispatcher(productsActions.save(productData));
    if (onSave) onSave(productData);
  };

  return (
    <form
      className={clsx(styleName, style.edit)}
      onSubmit={(e) => {
        console.log('Form submitted'); // Добавьте эту строку
        handleSubmit(onSubmit)(e);
        console.log('Form errors:', JSON.stringify(errors));
      }}
    >
      <img className={style.img} src={imageUrl || unknowImageUrl} alt={name} />
      <div className={style.info}>
        <ProductEditItem
          {...register('price', { valueAsNumber: true })}
          type="number"
          step="0.01"
          title={t('widgets.product.cost')}
          error={errors.price?.message && t(errors.price.message)}
        />
        <ProductEditItem
          {...register('name')}
          type="text"
          title={t('widgets.product.name')}
          error={errors.name?.message && t(errors.name.message)}
        />
        <ProductEditItem
          {...register('description')}
          type="text"
          className={clsx(style.product_edit_item, style.desc)}
          title={t('widgets.product.description')}
          error={errors.description?.message && t(errors.description.message)}
        />
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
