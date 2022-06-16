import { combineReducers } from "@reduxjs/toolkit";
import repos from "./repos";
import { recommendationsApi } from "@features/repos/api/getRecommendations";
import { repoInfoApi } from "@features/info/api/getRepoInfo";

export default combineReducers({
  repos,
  [recommendationsApi.reducerPath]: recommendationsApi.reducer,
  [repoInfoApi.reducerPath]: repoInfoApi.reducer,
});
