import { Repos, getReccomendations } from "@features/repos";
import React, { memo } from "react";
import { injectIntl } from "react-intl";
import { compose } from "redux";

export const ReposPage = () => {
  return <Repos />;
};

export async function getStaticProps() {
  const recommendations = await getReccomendations();
  return {
    props: {
      recommendations,
    },
  };
}

// const mapStateToProps = createStructuredSelector({
//   app: selectApp(),
//   repoName: selectRepoName(),
//   reposData: selectReposData(),
//   reposError: selectReposError(),
// });

// function mapDispatchToProps(dispatch) {
//   const { requestGetGithubRepos, clearGithubRepos } = appCreators;
//   return {
//     dispatchClearGithubRepos: () => dispatch(clearGithubRepos()),
//     dispatchGithubRepos: repoName => dispatch(requestGetGithubRepos(repoName)),
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(injectIntl, memo)(ReposPage);
