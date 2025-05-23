// redux/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://e-learning-server.test/api/' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: 'register',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: 'forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: 'reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    getCurrentUser: builder.query({
      query: (token) => ({
        url: 'user',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: 'logout',
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    resendVerification: builder.mutation({
      query: (email) => ({
        url: 'resend-email-verification-link',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useForgotPasswordMutation, useResetPasswordMutation, useGetCurrentUserQuery, useLogoutMutation, useResendVerificationMutation } = apiSlice;
