export type RepoInfoTypes = {
  id: number;
  name: string;
  description: string;
  forks: number;
  watchers: number;
  stargazersCount: number;
  owner: {
    login: string;
    type: string;
  };
};
