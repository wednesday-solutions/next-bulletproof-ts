import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RepoState {
  reposCount: number;
  repos: object[];
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
    successGetRepos: (state: RepoState, action: PayloadAction<object>) => {
      state.repos = [action.payload];
      state.reposCount = 0;
    },
  },
});

export const { successGetRepos } = repoSlice.actions;

export default repoSlice.reducer;
