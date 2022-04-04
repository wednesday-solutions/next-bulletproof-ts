import { generateApiClient } from "@utils/apiUtils";
const repoApi = generateApiClient("github");

const getReccomendations = async () => {
  const res = await repoApi.get(`/orgs/wednesday-solutions/repos?type=public`);
  const getData = response => {
    if (!response.ok) {
      console.error(res.data);
      return [];
    }

    const recommendations = ["react-floki", "nextjs-template"];
    return response.data
      .filter(({ name }) => recommendations.includes(name))
      .map(({ id, name }) => ({ id, name }));
  };
  return getData(res);
};

export default getReccomendations;
