import React from "react";
import { loadCatalog } from "@app/utils/linguiUtils";
import { Info } from "@features/info";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import { nextReduxWrapper } from "@store";
import { GetServerSideProps } from "next";

export const RepoInfoPage = () => {
  return <Info />;
};

export const getServerSideProps: GetServerSideProps = nextReduxWrapper.getServerSideProps(
  store => async context => {
    // This automatically creates a store instance which can be used in getServerSideProps or getInitialProps
    // Refer to https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering
    store.dispatch(
      repoInfoApi.endpoints.fetchRepoInfo.initiate({
        username: context.query.owner || "wednesday-solutions",
        repo: context.query.slug,
      })
    );

    await Promise.all(store.dispatch(repoInfoApi.util.getRunningQueriesThunk()));

    const translation = await loadCatalog(context.locale!);

    return {
      props: {
        translation,
      },
    };
  }
);

export default RepoInfoPage;
