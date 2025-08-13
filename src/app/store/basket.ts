import type { CaseReducer, PayloadAction, SliceSelectors } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './index';
import { BasketProduct } from '../../shared/server.types';

export const BASKET_KEY = 'basket';

export const basketSlice = createSlice<
  BasketProduct[],
  {
    set: CaseReducer<BasketProduct[], PayloadAction<BasketProduct[]>>;
    add: CaseReducer<BasketProduct[], PayloadAction<BasketProduct>>;
    remove: CaseReducer<BasketProduct[], PayloadAction<string>>;
    clear: CaseReducer<BasketProduct[], PayloadAction<void>>;
  },
  'basket',
  SliceSelectors<BasketProduct[]>,
  'basket'
>({
  name: 'basket',
  initialState: [],
  reducers: {
    set: (_, action) => action.payload,
    add: (state, action) => {
      console.log('befor add: ', JSON.stringify(state));
      const existingProductIndex = state.findIndex(
        (basketProduct) => basketProduct.product.id === action.payload.product.id
      );
      console.log('existingIndex:', existingProductIndex);
      if (existingProductIndex >= 0) {
        const updatedState = [...state];
        const existingItem = updatedState[existingProductIndex];
        updatedState[existingProductIndex] = {
          ...existingItem,
          count: action.payload.count,
        };
        return updatedState;
      } else {
        const productToAdd = action.payload;
        return [...state, productToAdd];
      }
    },
    remove: (state, action) => state.filter((basketProduct) => basketProduct.product.id !== action.payload),
    clear: () => [],
  },
});

export const basketActions = basketSlice.actions;

export const basketSelectors = {
  get: (state: RootState): RootState['basket'] => state.basket,
  getTotalItems: (state: RootState) => state.basket.reduce((total, basketProduct) => total + basketProduct.count, 0),
  getTotalPrice: (state: RootState) =>
    state.basket.reduce((total, basketProduct) => total + basketProduct.product.price * basketProduct.count, 0),
};

export const basket = basketSlice.reducer;
