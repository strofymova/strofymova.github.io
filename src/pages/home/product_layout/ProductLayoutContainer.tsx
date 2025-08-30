import React, { useCallback, useState } from 'react';
import ProductLayoutComponent from './ProductLayoutComponent';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions, productsSelectors } from '../../../app/store/products';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from '../../../app/store/index';
import CustomSpin from '../../../widgets/spin/CustomSpin';
import { getProducts } from '../../../test/mock/fetchProductsMock';

interface IProductLayoutContainerProps {
  infinityScroll?: boolean;
}

const ProductLayoutContainer: React.FC<IProductLayoutContainerProps> = ({
  infinityScroll,
}: IProductLayoutContainerProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const products = useSelector(productsSelectors.get);

  const loadMoreProducts = useCallback(
    async (count: number) => {
      try {
        setLoading(true);
        const currentCount = products.length;
        const addedProducts = await getProducts({
          limit: count,
          offset: currentCount,
        });

        dispatch(productsActions.add(addedProducts));
      } catch (error) {
        message.error(t('errors.ERR_FAILED_LOAD_PRODUCTS'));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, t, products.length]
  );

  if (loading) {
    return <CustomSpin />;
  }

  return (
    <ProductLayoutComponent
      onShowMore={() => loadMoreProducts(1)}
      onIntersection={() => loadMoreProducts(4)}
      infinityScroll={infinityScroll}
    />
  );
};

export default ProductLayoutContainer;
