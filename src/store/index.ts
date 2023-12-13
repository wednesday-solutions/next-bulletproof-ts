import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "@slices/repos";
import middlewares from "./middlewares";
import { githubApiService } from "@utils/apiUtils";

export const makeStore = () =>
  configureStore({
    reducer: {
      repos: repoReducer,
      [githubApiService.reducerPath]: githubApiService.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
