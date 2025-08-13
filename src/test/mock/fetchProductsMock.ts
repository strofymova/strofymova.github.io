import { getIProducts } from '../../core/utility/GeneratorUtil';
import { IProduct } from '../../widgets/marketplace/products/Product';

const MOCK_PRODUCTS = getIProducts(200);

export interface GetProductsOptions {
  limit?: number;
  offset?: number;
}

export const getProducts = async (options: GetProductsOptions = {}): Promise<IProduct[]> => {
  const { limit = MOCK_PRODUCTS.length, offset = 0 } = options;

  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = offset;
      const endIndex = Math.min(offset + limit, MOCK_PRODUCTS.length);
      const paginatedProducts = MOCK_PRODUCTS.slice(startIndex, endIndex);
      resolve(paginatedProducts);
    }, 100);
  });
};
