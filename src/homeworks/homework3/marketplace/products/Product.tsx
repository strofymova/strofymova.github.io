import React from "react";
import style from "./product.module.css"
import Basket from "../basket/Basket";
import unknowImageUrl from "../../../../stories/assets/custom-unknow-product.svg";
import ProductItem from "./ProductItem";

export interface IProduct {
    price: number;
    imageUrl: string | null;
    name: string;
    description: string;    
    disable?: boolean;
}

export function Product({price, imageUrl, name, description, disable}: IProduct) {
    return (
        <div className={style.main}>
            <div className={style.title}>Карточка товара</div>
            <img className={style.img} src={imageUrl === null ? unknowImageUrl : imageUrl}/>
            <div className={style.info}>
                <ProductItem title='Стоимость' value={price}/>
                <ProductItem title='Название' value={name}/>
                <ProductItem className={style.desc} title='Описание' value={description}/>
                <Basket initCount={0} disabled={disable && true}></Basket>
            </div>
        </div>
    )
}

export default Product;