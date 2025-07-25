import { createSlice } from '@reduxjs/toolkit';
// import { CaseReducer } from '@reduxjs/toolkit/src/createReducer';
import { RootState } from './index';

export const initializedSlice = createSlice({
  name: 'initialized',
  initialState: null,
  reducers: {
    init: () => true,
  },
});

export const initializedActions = initializedSlice.actions;
export const { reducer: initialized } = initializedSlice;

export const initializedSelectors = {
  get: (state: RootState): RootState['initialized'] => state.initialized,
};
