import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApisauceInstance, create } from "apisauce";
import camelCase from "lodash/camelCase";
import snakeCase from "lodash/snakeCase";
import isomorphicFetch from "isomorphic-fetch";
import { HYDRATE } from "next-redux-wrapper";
import { mapKeysDeep } from "./index";

const apiClients: Record<string, ApisauceInstance | null> = {
  itunes: null,
  default: null,
};
export const getApiClient = (type = "itunes") => apiClients[type];
export const generateApiClient = (type = "itunes") => {
  switch (type) {
    case "itunes":
      apiClients[type] = createApiClientWithTransForm(process.env.NEXT_PUBLIC_ITUNES_URL);
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(process.env.NEXT_PUBLIC_ITUNES_URL);
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = (baseURL: string) => {
  const api = create({
    baseURL,
    headers: { "Content-Type": "application/json" },
  });
  api.addResponseTransform(response => {
    const { ok, data } = response;
    if (ok && data) {
      response.data = mapKeysDeep(data, keys => camelCase(keys));
    }
    return response;
  });

  api.addRequestTransform(request => {
    const { data } = request;
    if (data) {
      request.data = mapKeysDeep(data, keys => snakeCase(keys));
    }
    return request;
  });
  return api;
};

/**
 * @desc Here we initialize an empty api service that we'll inject endpoints into later as needed
 */
export const itunesApiService = createApi({
  reducerPath: "itunes",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_ITUNES_URL,
    fetchFn: isomorphicFetch,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
