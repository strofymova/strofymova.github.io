import type { CaseReducer, PayloadAction, SliceSelectors } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { IProduct } from '../../widgets/marketplace/products/Product';

export const PRODUCTS_KEY = 'products';

interface ProductsState {
  items: IProduct[];
  totalCount: number;
}

export const productsSlice = createSlice<
  ProductsState,
  {
    set: CaseReducer<ProductsState, PayloadAction<IProduct[]>>;
    add: CaseReducer<ProductsState, PayloadAction<IProduct[]>>;
    save: CaseReducer<ProductsState, PayloadAction<IProduct>>;
    reset: CaseReducer<ProductsState>;
  },
  'products',
  SliceSelectors<ProductsState>,
  'products'
>({
  name: 'products',
  initialState: {
    items: [],
    totalCount: 0,
  },
  reducers: {
    set: (state, action) => {
      state.items = action.payload;
      state.totalCount = action.payload.length;
    },
    add: (state, action) => {
      state.items = [...state.items, ...action.payload];
      state.totalCount += action.payload.length;
    },
    save: (state, action) => {
      const existingIndex = state.items.findIndex((product) => product.id === action.payload.id);
      if (existingIndex === -1) {
        state.items = [action.payload, ...state.items];
        state.totalCount += 1;
      } else {
        state.items[existingIndex] = action.payload;
      }
    },
    reset: (state) => {
      state.items = [];
      state.totalCount = 0;
    },
  },
});

export const productsActions = {
  ...productsSlice.actions,
};

export const productsSelectors = {
  get: (state: RootState): IProduct[] => state.products.items,
  getTotalCount: (state: RootState): number => state.products.totalCount,
  getById:
    (id: string) =>
    (state: RootState): IProduct | undefined =>
      state.products.items.find((product) => product.id === id),
};

export const products = productsSlice.reducer;
