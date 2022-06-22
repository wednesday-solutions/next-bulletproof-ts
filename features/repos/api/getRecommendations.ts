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
      query: ({ repoName, page }) => `search/repositories?q=${repoName}&per_page=10&page=${page}`,
      transformResponse: (response: IResponse) => {
        return convertObjectToCamelCase<IResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRecommendationQuery } = recommendationsApi;
