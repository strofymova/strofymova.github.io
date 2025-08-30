import { createSlice } from '@reduxjs/toolkit';
import { ErrorCode, ServerError, SignUpState } from '../../api_types';
import { signUp } from './signUpActions';

const initialState: SignUpState = {
  token: null,
  isLoading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.error = null;
      localStorage.removeItem('auth_token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        localStorage.setItem('auth_token', action.payload.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload?.errors?.[0]) {
          const error = action.payload.errors[0];
          state.error = error;
        } else {
          const error: ServerError = {
            extensions: { code: 'ERR_NETWORK' as ErrorCode },
            message: action.error.message || 'Registration failed',
            name: null,
            stack: null,
          };
          state.error = error;
        }
      });
  },
});

export const { clearError, logout } = signUpSlice.actions;
export default signUpSlice.reducer;
