import React, { ReactNode } from 'react';
import style from './product.module.css';
import { useTranslation } from 'react-i18next';
import { useThemeStyles } from 'src/hooks/useThemeStyles';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { clsx } from 'clsx';

interface IProductAddProps {
  onClick: () => void;
}
export const ProductAdd = ({ onClick }: IProductAddProps): ReactNode => {
  const { t } = useTranslation();
  const styleName = useThemeStyles(style.main, {
    light: style.light,
    dark: style.dark,
  });

  return (
    <div className={clsx(styleName, style.product_add)}>
      <div className={style.title}>{t('widgets.product.card')}</div>
      <div className={style.add_content}>
        <Button
          className={style.add_btn}
          type="primary"
          icon={<PlusOutlined />}
          onClick={onClick}
          title={t('widgets.product.add')}
        />
      </div>
    </div>
  );
};
export default ProductAdd;
