import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import style from './product_list.module.css';
import { IProduct, Product } from '../marketplace/products/Product';
import { useIntersectionObserver } from '../../hooks/useIntersectionOrserver';
import Modal from '../modal/Modal';
import { useModalManager } from '../../hooks/useModalManager';
import ProductEdit from '../marketplace/products/ProductEdit';
import ProductAdd from '../marketplace/products/ProductAdd';
import { generateUUID } from 'src/utility/GeneratorUtil';
import { useTranslation } from 'react-i18next';

export interface IProductList {
  products: IProduct[];
  className?: string;
  onIntersection?: () => void;
  infinityScroll: boolean;
}

export function ProductList({
  products,
  className,
  onIntersection,
  infinityScroll: infinityScroll = false,
}: IProductList): React.ReactNode {
  const lastProductRef = useRef<HTMLDivElement>(null);

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
  const [_products, setProducts] = useState<IProduct[]>(products);

  const handleOnClickProduct = (id: string) => {
    setEditProduct(_products.find((product) => product.id === id));
    openModal();
  };

  const handleOnSaveProduct = (saveProduct: IProduct) => {
    console.log(
      'handleOnSaveProduct: [' + saveProduct.price + ',' + saveProduct.name + ',' + saveProduct.description + ']'
    );
    if (_products.findIndex((product) => product.id === saveProduct.id) === -1) {
      setProducts([saveProduct, ..._products]);
    } else {
      setProducts(
        _products.map((product) => (product.id === editProduct.id ? { ...product, ...saveProduct } : product))
      );
    }
    setEditProduct(null);
    closeModal();
  };

  useEffect(() => {
    setProducts(products);
  }, [products]);

  useEffect(() => {
    setProducts(_products);
  }, [_products]);

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

  return (
    <div className={clsx(style.main, className)}>
      <ProductAdd onClick={handleOnClickAddProduct}></ProductAdd>
      {_products.map((product, index) => {
        const isLast = index === _products.length - 1;
        return (
          <Product
            onClick={handleOnClickProduct}
            ref={infinityScroll && isLast ? lastProductRef : null}
            key={product.id}
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
