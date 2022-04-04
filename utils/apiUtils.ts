import { create } from "apisauce";
import snakeCase from "lodash/snakeCase";
import camelCase from "lodash/camelCase";
import { mapKeysDeep } from "./index";

const { NEXT_PUBLIC_GITHUB_URL } = process.env;
const apiClients = {
  github: null,
  default: null,
};

export const getApiClient = (type = "github") => apiClients[type];
export const generateApiClient = (type = "github") => {
  switch (type) {
    case "github":
      apiClients[type] = createApiClientWithTransForm(NEXT_PUBLIC_GITHUB_URL);
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(NEXT_PUBLIC_GITHUB_URL);
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
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
