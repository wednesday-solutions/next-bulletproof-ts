import { loadCatalog } from "@app/utils/linguiUtils";
import { Info } from "@features/info";
import { repoInfoApi } from "@features/info/api/getRepoInfo";
import { makeStore } from "@store";
import { GetServerSideProps } from "next";

export const RepoInfoPage = () => {
  return <Info />;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const store = makeStore();
  // This automatically creates a store instance which can be used in getServerSideProps or getInitialProps
  // Refer to https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering
  store.dispatch(
    repoInfoApi.endpoints.fetchRepoInfo.initiate({
      username: context.query.owner || "wednesday-solutions",
      repo: context.query.slug,
    })
  );
  const translation = await loadCatalog(context.locale!);

  await Promise.all(store.dispatch(repoInfoApi.util.getRunningQueriesThunk()));

  return {
    props: {
      translation,
    },
  };
};

export default RepoInfoPage;
