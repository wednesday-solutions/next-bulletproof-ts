import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

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

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

export const nextReduxWrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
