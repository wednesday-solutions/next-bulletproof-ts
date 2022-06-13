import { repoInfoApi } from "@features/info";
import { recommendationsApi } from "@features/repos";

const middlewares = [recommendationsApi.middleware, repoInfoApi.middleware];

export default middlewares;
