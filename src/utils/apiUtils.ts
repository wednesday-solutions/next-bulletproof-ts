import { createApi } from "@reduxjs/toolkit/query/react";
import { get } from "lodash";
import axios, { AxiosError } from "axios";
import { HYDRATE } from "next-redux-wrapper";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@app/store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (err) {
      return {
        error: {
          status: (err as AxiosError).response?.status,
          data: (err as AxiosError).response?.data || (err as Error).message,
        },
      };
    }
  };

/**
 * @desc Here we initialize an empty api service that we'll inject endpoints into later as needed
 */
export const githubApiService = createApi({
  reducerPath: "github",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GITHUB_URL || "",
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return get(action.payload, reducerPath);
    }
  },
  endpoints: () => ({}),
});
