import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsLoader } from '../../../hooks/useLoadProducts';
import { SortingInput } from '../../../shared/server.types';
import CustomSpin from '../../../widgets/spin/CustomSpin';
import ProductLayoutComponent from './ProductLayoutComponent';

interface IProductLayoutContainerProps {
  infinityScroll?: boolean;
}

const ProductLayoutContainer: React.FC<IProductLayoutContainerProps> = ({
  infinityScroll,
}: IProductLayoutContainerProps) => {
  const { id } = useParams();

  const { loading, hasMore, currentPage, productsTotalCount, sorting, loadMoreProducts, refetchWithNewSorting } =
    useProductsLoader({
      categoryId: id,
      pageSize: 10,
    });

  const handleSortChange = useCallback(
    (newSorting: SortingInput) => {
      refetchWithNewSorting(newSorting);
    },
    [refetchWithNewSorting]
  );

  const handleShowMore = useCallback(() => {
    loadMoreProducts(currentPage + 1);
  }, [loadMoreProducts, currentPage]);

  const handleIntersection = useCallback(() => {
    if (infinityScroll) {
      loadMoreProducts(currentPage + 1);
    }
  }, [infinityScroll, loadMoreProducts, currentPage]);

  if (loading && productsTotalCount === 0) {
    return <CustomSpin />;
  }

  return (
    <ProductLayoutComponent
      onShowMore={handleShowMore}
      onIntersection={handleIntersection}
      onSortChange={handleSortChange}
      infinityScroll={infinityScroll}
      hasMore={hasMore}
      currentSorting={sorting}
    />
  );
};

export default ProductLayoutContainer;
