import React from "react";
import style from "./product_detailed.module.css"
import { IProduct } from "./Product";
import unknowImageUrl from "../../../../stories/assets/custom-unknow-product.svg";
import Basket from "../basket/Basket";
import ProductItem from "./ProductItem";
import { useTranslation } from "react-i18next";

export interface IProductDetail extends IProduct {
    category: string;
}

export function ProductDetailed({category, description, imageUrl, name, price, disable}: IProductDetail) {
    const {t} = useTranslation();
    const initCount = 0;
    const basketBtnDisable = disable && true;
    const currentImageUrl = imageUrl === null ? String(unknowImageUrl) : imageUrl;
    return (
        <div className={style.main}>
            <div className={style.title}>{t("widgets.product.cardDetailedTitle")}</div>
            <img className={style.img} src={currentImageUrl}/>
            <div className={style.info}>
                <ProductItem className={style.price} title={t("widgets.product.cost")} value={price}/>
                <ProductItem className={style.category} title={t("widgets.product.category")} value={category}/>
                <ProductItem className={style.name} title={t("widgets.product.name")}  value={name}/>
                <ProductItem className={style.desc} title={t("widgets.product.description")} value={description}/>
                <Basket className={style.basket_btn} initCount={initCount} disabled={basketBtnDisable}></Basket>
            </div>
        </div>
    )
}

export default ProductDetailed;