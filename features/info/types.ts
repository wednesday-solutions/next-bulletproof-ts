export type RepoInfo = {
  id: number;
  name: string;
  description: string;
  forks: number;
  watchers: number;
  stargazers_count: number;
  owner: {
    login: string;
    type: string;
  };
};
