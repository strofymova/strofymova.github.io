import React from "react";
import clsx from "clsx";
import style from "./product_list.module.css"
import { IProduct, Product } from  "../marketplace/products/Product";

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export interface IProductList {
    products: IProduct[];
    className?: string;
}

export function ProductList({ products, className }: IProductList): React.ReactElement {
    return (
        <div className={clsx(style.main, className)}>
            {products.map((product) => (
                <Product description={product.description}
                         imageUrl={product.imageUrl} 
                         name={product.name}
                         price={product.price}
                         disable={product.disable}
                         key={generateUUID()} ></Product>
            ))}
        </div>
    )
}