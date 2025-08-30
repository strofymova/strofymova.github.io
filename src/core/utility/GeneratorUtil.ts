export const generateUUID = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// export const getIProduct = (): IProductCardProps => {
//   const { id, name, desc, price } = createRandomProduct(new Date().toISOString());
//   return {
//     id: id,
//     price: price,
//     imageUrl: null,
//     name: name,
//     description: desc,
//   };
// };

// export const getIProducts = (count: number): IProductCardProps[] => {
//   const products: IProductCardProps[] = [];
//   for (let i = 0; i < count; i++) {
//     products.push(getIProduct());
//   }
//   return products;
// };
