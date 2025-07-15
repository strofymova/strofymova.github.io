import React, { useContext, useEffect, useState} from 'react';
import Header from '../header/Header'
import styles from './layout.module.css'
import {Theme, ThemeContext } from '../../app/App'
import clsx from 'clsx';
import { ProductList, IProductList } from '../../homework7/product_list/ProductList'
import { IProduct } from '../marketplace/products/Product';

export function Layout (): React.ReactNode {
    const {theme} = useContext(ThemeContext);
    const [styleName, setStyleName] = useState(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
    useEffect(() => {
        setStyleName(clsx(styles.main, theme === Theme.light ? styles.dark : styles.light));
    }, [theme]);
    
    const varProducts: IProduct[] = [
            {
                price: 100,
                imageUrl: null,
                name: "Товар 1",
                description: "Описание товара 1"
            },
            {
                price: 200,
                imageUrl: "/path/to/image.jpg",
                name: "Товар 2",
                description: "Описание товара 2",
                disable: true
            }
        ];

    const className = "productList";
    
    return (
            <div className={styleName}>
                <Header/>
                <ProductList products={varProducts} className={className}/>
            </div>
    )
}
export default Layout;