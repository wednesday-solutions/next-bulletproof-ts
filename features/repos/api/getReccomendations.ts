import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface IResponse{
  incomplete_results:boolean;
  items:any;
  total_count:string;
}

export const reccomendationsApi = createApi({
  reducerPath: 'reccomendationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    fetchRecommendation: builder.query<IResponse, string>({
      query: (repo) => `search/repositories?q=${repo}`,
    }),
  }),
})

export const { useFetchRecommendationQuery } =reccomendationsApi;
