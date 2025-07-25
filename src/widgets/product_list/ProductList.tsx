import React, { useRef} from 'react';
import { clsx } from 'clsx';
import style from './product_list.module.css';
import { IProduct, Product } from '../marketplace/products/Product';
import { useIntersectionObserver } from '../../hooks/useIntersectionOrserver';

export interface IProductList {
  products: IProduct[];
  className?: string;
  onIntersection?: () => void;
}

export function ProductList({ products, className, onIntersection }: IProductList): React.ReactElement {
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

  return (
    <div className={clsx(style.main, className)}>
      {products.map((product, index) => {
        const isLast = index === products.length - 1;
        return (
          <Product
            ref={isLast ? lastProductRef : null}
            id={product.id}
            description={product.description}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            disable={product.disable}
            key={product.id}
          />
        );
      })}
    </div>
  );
}
