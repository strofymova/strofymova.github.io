import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { AuthResult, ServerError, SignUpBody } from '../../api_types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
        'data' in baseQueryReturnValue ? (baseQueryReturnValue.data as ServerError) : baseQueryReturnValue,
    }),
  }),
});

export const { useSignUpMutation } = authApi;
