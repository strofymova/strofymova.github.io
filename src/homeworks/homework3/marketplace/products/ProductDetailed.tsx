import React from "react";
import style from "./product_detailed.module.css"
import { IProduct } from "./Product";
import unknowImageUrl from "../../../../stories/assets/custom-unknow-product.svg";
import Basket from "../basket/Basket";
import ProductItem from "./ProductItem";

export interface IProductDetail extends IProduct {
    category: string;
}

export function ProductDetailed({category, description, imageUrl, name, price, disable}: IProductDetail) {
    const initCount = 0;
    const basketBtnDisable = disable && true;
    const currentImageUrl = imageUrl === null ? String(unknowImageUrl) : imageUrl;
    return (
        <div className={style.main}>
            <div className={style.title}>Подробное описание товара</div>
            <img className={style.img} src={currentImageUrl}/>
            <div className={style.info}>
                <ProductItem className={style.price} title='Стоимость' value={price}/>
                <ProductItem className={style.category} title='Категория' value={category}/>
                <ProductItem className={style.name} title='Название' value={name}/>
                <ProductItem className={style.desc} title='Описание' value={description}/>
                <Basket className={style.basket_btn} initCount={initCount} disabled={basketBtnDisable}></Basket>
            </div>
        </div>
    )
}

export default ProductDetailed;