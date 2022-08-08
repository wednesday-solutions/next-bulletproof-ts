import { RepoInfoTypes as RepoInfoResponse } from "@features/info/types";
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
    }),
  }),
  overrideExisting: false,
});

export const { useFetchRepoInfoQuery } = repoInfoApi;
