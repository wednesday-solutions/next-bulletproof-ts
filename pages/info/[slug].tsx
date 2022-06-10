import React from "react";
import { store } from "@store";
import { Info } from "@features/info";
import { repoInfoApi } from "@features/info/api/getRepoInfo";

export const RepoInfoPage = () => {
  return <Info />;
};

export const getServerSideProps = context => {
  store.dispatch(
    repoInfoApi.endpoints.fetchRepoInfo.initiate({
      username: context.query.owner || "wednesday-solutions",
      repo: context.query.slug,
    })
  );

  Promise.all(repoInfoApi.util.getRunningOperationPromises());

  return {
    props: {},
  };
};

export default RepoInfoPage;
