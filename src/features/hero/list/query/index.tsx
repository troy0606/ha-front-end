import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IHeroData , TAbilityApi} from '../../model/index';

// Define a service using a base URL and expected endpoints
export const heroApi = createApi({
  reducerPath: 'heroApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_DOMAIN}/heroes` }),
  tagTypes: ['getList','getOne','getPofile'],
  endpoints: (builder) => ({
    getList: builder.query<IHeroData, string>({
      query: () => ``,
      providesTags: ['getList'],
    }),
    getOne: builder.query<IHeroData, string>({
      query: (heroId) => `/${heroId}`,
      providesTags: ['getOne'],
    }),
    getProfile: builder.query<IHeroData, string>({
      query: (heroId) => `/${heroId}/profile`,
      providesTags: ['getPofile'],
    }),
    patchProfile: builder.mutation<>({
      query: (heroId: string, body: TAbilityApi) => ({
        url: `/${heroId}/profile`,
        method: 'PATCH',
        body,
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = heroApi