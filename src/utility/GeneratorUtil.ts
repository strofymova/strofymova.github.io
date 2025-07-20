import { createRandomProduct } from "src/homeworks/ts1/3_write";
import { IProduct } from "src/widgets/marketplace/products/Product";

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getIProducts = (count: number): IProduct[] => {
    const products: IProduct[] = [];
    for (let i = 0; i < count; i++) {
        products.push(getIProduct())
    }
    return products;
};

export const getIProduct = (): IProduct => {
    const {id, name, photo, desc, price, category} = createRandomProduct(new Date().toISOString());
    return {
            price: price,
            imageUrl: null,
            name: name,
            description: desc
        };
};
