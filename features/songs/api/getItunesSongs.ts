import { RepoInfoTypes as RepoInfoResponse } from "@features/info/types";
import { convertObjectToCamelCase } from "@utils";
import { itunesApiService } from "@utils/apiUtils";

type Params = {
  searchTerm: string;
};

export const songsApi = itunesApiService.injectEndpoints({
  endpoints: builder => ({
    fetchSongs: builder.query<RepoInfoResponse, object>({
      query: (params: Params) => {
        if (!params.searchTerm) {
          throw new Error("Invalid params");
        }

        return `search?term=${params.searchTerm}`;
      },
      transformResponse: (response: RepoInfoResponse) => {
        return convertObjectToCamelCase<RepoInfoResponse>(response);
      },
    }),
  }),
  overrideExisting: false,
});

export const { useFetchSongsQuery } = songsApi;
