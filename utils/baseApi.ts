import { HYDRATE } from "next-redux-wrapper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Here we initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
  reducerPath: "github",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_GITHUB_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
