import React, { useCallback, useEffect } from 'react';
import ProductLayoutContainer from './ProductLayoutContainer';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { productsActions, productsSelectors } from '../../../app/store/products';
import { getProducts } from '../../..//test/mock/fetchProductsMock';
import { AppDispatch } from '../../..//app/store';
import { message } from 'antd';
import CustomSpin from '../../..//widgets/spin/CustomSpin';

interface IProductLayoutProps {
  infinityScroll?: boolean;
}

const ProductLayout: React.FC<IProductLayoutProps> = React.memo(
  ({ infinityScroll }: IProductLayoutProps): React.ReactNode => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(productsSelectors.get, shallowEqual);

    const initialize = useCallback(async () => {
      try {
        if (products.length > 0) return;
        const initProducts = await getProducts({
          limit: 10,
          offset: 0,
        });

        dispatch(productsActions.set(initProducts));
      } catch (error) {
        message.error(t('errors.ERR_FAILED_LOAD_PRODUCTS'));
      }
    }, [dispatch, t, products.length]);

    useEffect(() => {
      initialize();
    }, [dispatch, t, initialize]);

    if (products.length === 0) {
      return <CustomSpin />;
    }

    return <ProductLayoutContainer infinityScroll={infinityScroll} />;
  }
);

ProductLayout.displayName = 'ProductLayout';
export default ProductLayout;
