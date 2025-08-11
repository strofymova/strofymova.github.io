import type { CaseReducer, PayloadAction, SliceSelectors } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { IProduct } from 'src/widgets/marketplace/products/Product';
import { getIProducts } from 'src/core/utility/GeneratorUtil';

export const PRODUCTS_KEY = 'products';

export const productsSlice = createSlice<
  IProduct[],
  {
    set: CaseReducer<IProduct[], PayloadAction<IProduct[]>>;
    add: CaseReducer<IProduct[], PayloadAction<IProduct[]>>;
    save: CaseReducer<IProduct[], PayloadAction<IProduct>>;
  },
  'products',
  SliceSelectors<IProduct[]>,
  'products'
>({
  name: 'products',
  initialState: getIProducts(7),
  reducers: {
    set: (_, action) => action.payload,
    add: (state, action) => [...state, ...action.payload],
    save: (state, action) => {
      console.log('update');
      if (state.findIndex((product) => product.id === action.payload.id) === -1) {
        return [action.payload, ...state];
      } else {
        return state.map((product) => (product.id === action.payload.id ? action.payload : product));
      }
    },
  },
});

export const productsActions = productsSlice.actions;

export const productsSelectors = {
  get: (state: RootState): RootState['products'] => state.products,
};

export const products = productsSlice.reducer;
