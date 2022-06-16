import { combineReducers } from "@reduxjs/toolkit";
import repos from "./repos";
import { repoDataApi } from "@features/repos/api/getRepoData";
import { repoInfoApi } from "@features/info/api/getRepoInfo";

export default combineReducers({
  repos,
  [repoDataApi.reducerPath]: repoDataApi.reducer,
  [repoInfoApi.reducerPath]: repoInfoApi.reducer,
});
