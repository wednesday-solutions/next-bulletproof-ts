import { useDispatch, TypedUseSelectorHook, useSelector, useStore } from "react-redux";
import { AppDispatch, RootState, AppStore } from ".";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
