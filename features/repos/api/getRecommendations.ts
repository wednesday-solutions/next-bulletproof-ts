import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { convertObjectToCamelCase } from "@utils";

export interface ResponseItem {
  name: string;
  fullName: string;
  stargazersCount: number;
  owner: {
    login: string;
  };
}

export type IResponse = {
  incompleteResults: boolean;
  items: ResponseItem[];
  totalCount: number;
};

export const recommendationsApi = createApi({
  reducerPath: "recommendationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: builder => ({
    fetchRecommendation: builder.query<IResponse, string>({
      query: repo => `search/repositories?q=${repo}`,
      transformResponse: (response: IResponse) => {
        return convertObjectToCamelCase<IResponse>(response);
      },
    }),
  }),
});

export const { useFetchRecommendationQuery } = recommendationsApi;
