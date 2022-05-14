import _ from "lodash";
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
  incompleteResults: boolean;
  items: ResponseItem[];
  totalCount: number;
}

export const recommendationsApi = createApi({
  reducerPath: "recommendationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: builder => ({
    fetchRecommendation: builder.query<IResponse, string>({
      query: repo => `search/repositories?q=${repo}`,
      transformResponse: (response: IResponse) => {
        for (const key in response) {
          const camelKey = _.camelCase(key);
          if (camelKey !== key) {
            response[camelKey] = response[key];
            delete response[key];
          }
        }

        return response;
      },
    }),
  }),
});

export const { useFetchRecommendationQuery } = recommendationsApi;
