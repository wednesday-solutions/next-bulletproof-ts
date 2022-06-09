import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RepoInfo as RepoInfoResponse } from "@features/info/types";
import { convertObjectToCamelCase } from "@utils";

type Params = {
  username: string;
  repo: string;
};

export const repoInfoApi = createApi({
  reducerPath: "repoInfoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  endpoints: builder => ({
    fetchRepoInfo: builder.query<RepoInfoResponse, object>({
      query: (params: Params) => `repos/${params.username}/${params.repo}`,
      transformResponse: (response: RepoInfoResponse) => {
        return convertObjectToCamelCase<RepoInfoResponse>(response);
      },
    }),
  }),
});

export const { useFetchRepoInfoQuery } = repoInfoApi;
