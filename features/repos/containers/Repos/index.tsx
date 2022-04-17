import React, { useEffect, memo, useState } from "react";
import get from "lodash/get";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes, { ReactComponentLike } from "prop-types";
import { Input, Divider, Row } from "antd";
import { isEmpty, debounce } from "lodash-es";
import { T } from "@common";
import { fonts } from "@themes/index";
import { injectIntl } from "react-intl";
import { RepoList, YouAreAwesome, Recommended, ErrorState } from "@features/repos/components";
import { Container, CustomCard } from "@common";
import { commonPropTypes } from "@utils";
import { useAppDispatch } from "@store";

const { Search } = Input;

interface Props {
  intl: any;
  repoName: string;
  maxwidth: number;
  reposData: any;
  recommendations: any;
  reposError: string;
  dispatchGithubRepos: any;
  dispatchClearGithubRepos: any;
}

export const Repos = ({
  intl,
  // repoName,
  maxwidth,
}: // reposData,
// recommendations,
// reposError,
// dispatchGithubRepos,
// dispatchClearGithubRepos,
Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loaded = get(reposData, "items", null) || reposError;
    if (loading && loaded) {
      setLoading(false);
    }
  }, [loading, reposData, reposError]);

  useEffect(() => {
    if (repoName && !reposData?.items?.length) {
      dispatchGithubRepos(repoName);
      setLoading(true);
    }
  }, []);

  const handleOnChange = rName => {
    if (!isEmpty(rName)) {
      dispatchGithubRepos(rName);
      setLoading(true);
    } else {
      dispatchClearGithubRepos();
    }
  };
  const debouncedHandleOnChange = debounce(handleOnChange, 200);
  return (
    <Container
      padding={20}
      maxwidth={500}
      style={{
        height: "100vh",
        alignSelf: "center",
      }}
    >
      <Row>
        <T id="recommended" styles={fonts.style.subheading()} />
      </Row>
      <Row justify="space-between">
        <Recommended recommendations={recommendations} />
        <YouAreAwesome href="https://www.iamawesome.com/">
          <T id="you_are_awesome" />
        </YouAreAwesome>
      </Row>
      <Divider />
      <CustomCard title={intl.formatMessage({ id: "repo_search" })} maxwidth={maxwidth}>
        <T marginBottom={10} id="get_repo_details" />
        <Search
          data-testid="search-bar"
          defaultValue={repoName}
          type="text"
          onChange={evt => debouncedHandleOnChange(evt.target.value)}
          onSearch={searchText => debouncedHandleOnChange(searchText)}
        />
      </CustomCard>
      <RepoList reposData={reposData} loading={loading} repoName={repoName} />
      <ErrorState reposData={reposData} loading={loading} reposError={reposError} />
    </Container>
  );
};

const types = {
  reposData: PropTypes.arrayOf(
    PropTypes.shape({
      totalCount: PropTypes.number,
      incompleteResults: PropTypes.bool,
      items: PropTypes.array,
    })
  ),
  reposError: PropTypes.object,
  repoName: PropTypes.string,
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired })
  ),
};

const { reposData, reposError, repoName, recommendations } = types;
const { intl } = commonPropTypes;

Repos.propTypes = {
  intl,
  repoName,
  reposData,
  reposError,
  recommendations,
  padding: PropTypes.number,
  maxwidth: PropTypes.number,
  dispatchGithubRepos: PropTypes.func,
  dispatchClearGithubRepos: PropTypes.func,
};

Repos.defaultProps = {
  padding: 20,
  maxwidth: 500,
};

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

export default compose(injectIntl, memo)(Repos) as ReactComponentLike;
