import React, { memo } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { injectIntl } from "react-intl";
import { appCreators } from "@store/reducers/app";
import { getReccomendations } from "@services/root";
import { selectApp, selectReposData, selectReposError, selectRepoName } from "@store/selectors/app";
import { Repos } from "@features/repos";

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

const mapStateToProps = createStructuredSelector({
  app: selectApp(),
  repoName: selectRepoName(),
  reposData: selectReposData(),
  reposError: selectReposError(),
});

function mapDispatchToProps(dispatch) {
  const { requestGetGithubRepos, clearGithubRepos } = appCreators;
  return {
    dispatchClearGithubRepos: () => dispatch(clearGithubRepos()),
    dispatchGithubRepos: repoName => dispatch(requestGetGithubRepos(repoName)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(injectIntl, withConnect, memo)(ReposPage);
