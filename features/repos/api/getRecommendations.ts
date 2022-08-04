import { convertObjectToCamelCase } from "@utils";
import { githubApiService } from "@utils/apiUtils";

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

export interface QueryArg {
  repoName: string;
  page: number;
}

export const recommendationsApi = githubApiService.injectEndpoints({
  endpoints: builder => ({
    fetchRecommendation: builder.query<IResponse, QueryArg>({
      query: ({ repoName: q, page }) => {
        let params: {
          q?: string;
          page?: number;
          per_page: number;
        } = {
          per_page: 10,
        };

        if (q) {
          params = { ...params, q };
        }

        if (page) {
          params = { ...params, page };
        }

        return {
          url: "search/repositories",
          params,
        };
      },
      transformResponse: (response: IResponse) => {
        return convertObjectToCamelCase<IResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRecommendationQuery } = recommendationsApi;
