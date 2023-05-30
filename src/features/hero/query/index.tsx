import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IHeroData , TAbilityApi} from '@hero_feature/model';

// Define a service using a base URL and expected endpoints
export default createApi({
  reducerPath: 'heroApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_DOMAIN}/heroes` }),
  tagTypes: ['getList','getOne','getPofile'],
  endpoints: (builder) => ({
    getList: builder.query<Array<IHeroData>, void>({
      query: () => ``,
      providesTags: ['getList'],
    }),
    getOne: builder.query<IHeroData, string>({
      query: (heroId) => `/${heroId}`,
      providesTags: ['getOne'],
    }),
    getProfile: builder.query<TAbilityApi, string | undefined>({
      query: (heroId) => `/${heroId}/profile`,
      providesTags: ['getPofile'],
    }),
    patchProfile: builder.mutation<number, { heroId: string; abilities: TAbilityApi}>({
      query: ( {heroId,abilities}) => ({
        url: `/${heroId}/profile`,
        method: 'PATCH',
        body: abilities,
        responseHandler: (response) => response.text(),
      }),
    })
  })
})