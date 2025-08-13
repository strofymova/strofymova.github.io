import React, { useRef, useState } from 'react';
import { clsx } from 'clsx';
import style from './product_list.module.css';
import { IProduct, Product } from '../marketplace/products/Product';
import { useIntersectionObserver } from '../../hooks/useIntersectionOrserver';
import Modal from '../modal/Modal';
import { useModalManager } from '../../hooks/useModalManager';
import ProductEdit from '../marketplace/products/ProductEdit';
import ProductAdd from '../marketplace/products/ProductAdd';
import { generateUUID } from '../../core/utility/GeneratorUtil';
import { useTranslation } from 'react-i18next';
import { profileSelectors } from '../../app/store/profile';
import { useSelector } from 'react-redux';
import { useAdminRight } from '../../hooks/useAdminRight';
import CustomSpin from '../spin/CustomSpin';
import { productsSelectors } from '../../app/store/products';

export interface IProductList {
  className?: string;
  onIntersection?: () => void;
  infinityScroll: boolean;
}

export const ProductList: React.FC<IProductList> = React.memo(
  ({ className, onIntersection, infinityScroll: infinityScroll = false }: IProductList): React.ReactNode => {
    const lastProductRef = useRef<HTMLDivElement>(null);
    const products = useSelector(productsSelectors.get);
    const profile = useSelector(profileSelectors.get);

    useIntersectionObserver(
      lastProductRef,
      (entry) => {
        if (entry.isIntersecting) {
          onIntersection();
        }
      },
      { threshold: 1 }
    );
    const { t } = useTranslation();
    const { isModalOpen, openModal, closeModal } = useModalManager();

    const [editProduct, setEditProduct] = useState<IProduct>();
    const { isAdmin, isLoading } = useAdminRight(profile);

    const handleOnClickProduct = (id: string) => {
      setEditProduct(products.find((product) => product.id === id));
      openModal();
    };

    const handleOnSaveProduct = () => {
      setEditProduct(null);
      closeModal();
    };

    const handleOnClickAddProduct = () => {
      const addProduct: IProduct = {
        id: generateUUID(),
        price: undefined,
        imageUrl: null,
        name: undefined,
        description: undefined,
      };
      setEditProduct(addProduct);
      openModal();
    };

    if (isLoading) {
      return <CustomSpin />;
    }

    return (
      <div className={clsx(style.main, className)}>
        {isAdmin && <ProductAdd onClick={handleOnClickAddProduct}></ProductAdd>}
        {products.map((product, index) => {
          const isLast = index === products.length - 1;
          return (
            <Product
              onClick={handleOnClickProduct}
              ref={infinityScroll && isLast ? lastProductRef : null}
              key={product.id}
              disable={!isAdmin}
              {...product}
            />
          );
        })}
        <Modal visible={isModalOpen} onClose={closeModal} title={t('widgets.product.edit')}>
          <ProductEdit {...editProduct} onSave={handleOnSaveProduct}></ProductEdit>
        </Modal>
      </div>
    );
  }
);

ProductList.displayName = 'ProductList';
export default ProductList;
