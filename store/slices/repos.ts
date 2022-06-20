import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseItem } from "@features/repos/api/getRecommendations";

export interface RepoState {
  reposCount: number;
  repos: ResponseItem[];
  error?: string;
}

const initialState: RepoState = {
  reposCount: 0,
  repos: [],
  error: undefined,
};

export const repoSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    successGetRepos: (state: RepoState, action: PayloadAction<ResponseItem[]>) => {
      state.repos = action.payload;
      state.reposCount = 0;
    },
  },
});

export const { successGetRepos } = repoSlice.actions;

export default repoSlice.reducer;
