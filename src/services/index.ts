import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, baseUrlLocal } from '../config/env/urls';

export const api = createApi({
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NODE_ENV === 'production' ? baseUrl : baseUrlLocal,
    prepareHeaders: (headers, { getState }: any) => {
      // const token = getState().auth.user?.access_token;
      // if (token) headers.set('authorization', `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
