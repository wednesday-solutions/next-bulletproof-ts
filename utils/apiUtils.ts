import { FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { ApisauceInstance, create } from "apisauce";
import camelCase from "lodash/camelCase";
import snakeCase from "lodash/snakeCase";
import isomorphicFetch from "isomorphic-fetch";
import { HYDRATE } from "next-redux-wrapper";
import { mapKeysDeep } from "./index";

const apiClients: Record<string, ApisauceInstance | null> = {
  github: null,
  default: null,
};
export const getApiClient = (type = "github") => apiClients[type];
export const generateApiClient = (type = "github") => {
  switch (type) {
    case "github":
      apiClients[type] = createApiClientWithTransForm(process.env.NEXT_PUBLIC_GITHUB_URL);
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(process.env.NEXT_PUBLIC_GITHUB_URL);
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

const baseQueryWithCamelize = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({ baseUrl: baseUrl, fetchFn: isomorphicFetch });

  return async (args: string | FetchArgs, api: BaseQueryApi, extraOptions = {}) => {
      const result = await baseQuery(args, api, extraOptions);
      const { data } = result;
      if (result.data) {
        result.data = mapKeysDeep(data, (keys: string) => camelCase(keys));
      }
      return result;
    };
};

/**
 * @desc Here we initialize an empty api service that we'll inject endpoints into later as needed
 */
export const githubApiService = createApi({
  reducerPath: "github",
  baseQuery: baseQueryWithCamelize(process.env.NEXT_PUBLIC_GITHUB_URL),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});
