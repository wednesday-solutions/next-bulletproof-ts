import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRepoItem } from "@features/repos/api/getRecommendations";

export interface RepoState {
  reposCount: number;
  repos: IRepoItem[];
  error: string | null;
}

const initialState: RepoState = {
  reposCount: 0,
  repos: [],
  error: null,
};

export const repoSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    successGetRepos: (state: RepoState, action: PayloadAction<IRepoItem[]>) => {
      state.repos = action.payload;
      state.reposCount = 0;
    },
  },
});

export const { successGetRepos } = repoSlice.actions;

export default repoSlice.reducer;
