export interface Recommendation {
  id: string;
  name: string;
}

export interface IRepoError {
  status: number;
  data: {
    message: string;
    documentation_url: string;
    errors: {
      code: string;
      field: string;
      resource: string;
    }[];
  };
}
