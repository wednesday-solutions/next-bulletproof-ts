import { Info } from "@features/info";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import { store } from "@store";
import { GetServerSideProps } from "next";

export const RepoInfoPage = () => {
  return <Info />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  // This automatically creates a store instance which can be used in getServerSideProps or getInitialProps
  // Refer to https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering
  store.dispatch(
    repoInfoApi.endpoints.fetchRepoInfo.initiate({
      username: context.query.owner || "wednesday-solutions",
      repo: context.query.slug,
    })
  );

  await Promise.all(repoInfoApi.util.getRunningOperationPromises());

  return {
    props: {},
  };
};

export default RepoInfoPage;
