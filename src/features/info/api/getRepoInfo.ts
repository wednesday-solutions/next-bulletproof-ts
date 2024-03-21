import { RepoInfoTypes as RepoInfoResponse } from "@features/info/types";
import { convertObjectToCamelCase } from "@utils";
import { githubApiService } from "@utils/apiUtils";

type Params = {
  username: string;
  repo: string;
};

export const repoInfoApi = githubApiService.injectEndpoints({
  endpoints: builder => ({
    fetchRepoInfo: builder.query<RepoInfoResponse, object>({
      query: (params: Params) => {
        if (!params.username || !params.repo) {
          throw new Error("Invalid params");
        }

        return `repos/${params.username}/${params.repo}`;
      },
      transformResponse: (response: RepoInfoResponse) => {
        return convertObjectToCamelCase<RepoInfoResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRepoInfoQuery } = repoInfoApi;
