import { RootState } from "@app/store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import isomorphicFetch from "isomorphic-fetch";
import { HYDRATE } from "next-redux-wrapper";
import { Action, PayloadAction } from "@reduxjs/toolkit";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

/**
 * @desc Here we initialize an empty api service that we'll inject endpoints into later as needed
 */
export const githubApiService = createApi({
  reducerPath: "github",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GITHUB_URL,
    fetchFn: isomorphicFetch,
  }),
  // to fix the error: "Type alias 'RootState' circularly references itself". return type is set to any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extractRehydrationInfo(action, { reducerPath }): any {
    if (
      isHydrateAction(action) &&
      action.payload &&
      typeof action.payload === "object" &&
      reducerPath in action.payload
    ) {
      return action.payload[reducerPath as keyof typeof action.payload];
    }
  },
  endpoints: () => ({}),
});
