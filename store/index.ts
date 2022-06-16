import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import repoReducer from "@slices/repos";
import { recommendationsApi } from "@features/repos/api/getRecommendations";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import middlewares from "./middlewares";

export const store = configureStore({
  reducer: {
    repos: repoReducer,
    [recommendationsApi.reducerPath]: recommendationsApi.reducer,
    [repoInfoApi.reducerPath]: repoInfoApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
