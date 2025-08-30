import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResult, ServerErrors, SignUpBody } from '../../api_types';
import { API_CONFIG } from '../../func/api_config';

export const signUp = createAsyncThunk<AuthResult, { email: string; password: string }, { rejectValue: ServerErrors }>(
  'signup/signUp',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const signUpData: SignUpBody = {
        email,
        password,
        commandId: process.env.REACT_APP_COMMAND_ID, // getEnvVar('REACT_APP_COMMAND_ID', 'storybook-s_trofymova_dev'),
      };

      const response = await fetch(`${API_CONFIG.BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data as ServerErrors);
      }

      return data as AuthResult;
    } catch (error) {
      return rejectWithValue({
        errors: [
          {
            extensions: { code: 'ERR_NETWORK' },
            name: 'NetworkError',
            message: 'Network error occurred',
            stack: '',
          },
        ],
      } as ServerErrors);
    }
  }
);
