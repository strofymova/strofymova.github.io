import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { AuthResult, SignUpBody } from '../../api_types';

export const getEnvVar = (key: string, defaultValue: string): string => {
  if (typeof process !== 'undefined' && process.env) {
    const envValue = process.env[key];
    if (typeof envValue === 'string') {
      return envValue;
    }
  }
  return defaultValue;
};

const API_BASE_URL = getEnvVar('REACT_APP_API_BASE_URL', 'http://19429ba06ff2.vps.myjino.ru/api/');

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResult, SignUpBody>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) =>
        'data' in baseQueryReturnValue ? baseQueryReturnValue.data : baseQueryReturnValue,
    }),
  }),
});

export const { useSignUpMutation } = authApi;
