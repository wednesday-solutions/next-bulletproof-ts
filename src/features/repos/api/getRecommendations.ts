import { convertObjectToCamelCase } from "@utils";
import { githubApiService } from "@utils/apiUtils";

export interface IRepoItem {
  id: number;
  name: string;
  full_name: string;
  stargazers_count: number;
  forks: number;
  owner: {
    login: string;
  };
}

export type IResponse = {
  incompleteResults: boolean;
  items: IRepoItem[];
  totalCount: number;
};

export interface QueryArg {
  repoName: string;
  page: number;
}

export const recommendationsApi = githubApiService.injectEndpoints({
  endpoints: builder => ({
    fetchRecommendation: builder.query<IResponse, QueryArg>({
      query: ({ repoName, page }) => ({
        url: `search/repositories?q=${repoName}&per_page=10&page=${page}`,
      }),
      transformResponse: (response: IResponse) => {
        return convertObjectToCamelCase<IResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRecommendationQuery } = recommendationsApi;
