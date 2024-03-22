
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `https://fakestoreapi.com/products`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi


