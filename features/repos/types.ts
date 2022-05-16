export interface Recommendation {
  id: number;
  name: string;
}

export interface IRepoError {
  status: number;
  data: {
    message: string;
    /**
     * Documentation url is recieved in the following way: documentation_url
     * which is NOT camelCase, however in the types we're defining it as documentationUrl
     * a check would be necessary, we can create a recursive function that can go one
     * level deep and update all the things inside given an object inside an object
     */
    documentationUrl: string;
    errors: {
      code: string;
      field: string;
      resource: string;
    }[];
  };
}
