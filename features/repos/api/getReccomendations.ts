import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ResponseItem {
  name: string;
  fullName: string;
  stargazersCount: number;
  owner: {
    login: string;
  };
}
export interface IResponse {
  incomplete_results: boolean;
  items: ResponseItem[];
  total_count: number;
}

export const reccomendationsApi = createApi({
  reducerPath: "reccomendationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: builder => ({
    fetchRecommendation: builder.query<IResponse, string>({
      query: repo => `search/repositories?q=${repo}`,
    }),
  }),
});

export const { useFetchRecommendationQuery } = reccomendationsApi;
