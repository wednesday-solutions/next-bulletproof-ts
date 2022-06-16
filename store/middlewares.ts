import { repoInfoApi } from "@features/info/api/getRepoInfo";
import { repoDataApi } from "@features/repos/api/getRepoData";

const middlewares = [repoInfoApi.middleware, repoDataApi.middleware];

export default middlewares;
