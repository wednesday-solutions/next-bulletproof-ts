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

export const repoDataApi = githubApiService.injectEndpoints({
  endpoints: builder => ({
    fetchRepoData: builder.query<IResponse, string>({
      query: repo => `search/repositories?q=${repo}`,
      transformResponse: (response: IResponse) => {
        console.log({ response });
        return convertObjectToCamelCase<IResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRepoDataQuery } = repoDataApi;
