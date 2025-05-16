import React from "react";
import style from "./product_detailed.module.css"
import { IProduct, ProductItem } from "./Product";
import unknowImageUrl from "../../../../stories/assets/custom-unknow-product.svg";
import Basket from "../basket/Basket";

export interface IProductDetail extends IProduct {
    category: string;
}

export function ProductDetailed(product: IProductDetail) {
    const initCount:number = 0;
    const basketBtnDisable = product.disable && true;
    const imageUrl:string = product.imageUrl === null ? unknowImageUrl : product.imageUrl;
    return (
        <div className={style.main}>
            <div className={style.title}>Подробное описание товара</div>
            <img className={style.img} src={imageUrl}/>
            <div className={style.info}>
                <ProductItem className={style.price} title='Стоимость' value={product.price}/>
                <ProductItem className={style.category} title='Категория' value={product.category}/>
                <ProductItem className={style.name} title='Название' value={product.name}/>
                <ProductItem className={style.desc} title='Описание' value={product.description}/>
                <Basket className={style.basket_btn} initCount={initCount} disabled={basketBtnDisable}></Basket>
            </div>
        </div>
    )
}

export default ProductDetailed;