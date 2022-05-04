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
import { useFetchRecommendationQuery } from "@features/repos/api/getReccomendations";

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
  recommendations,
}: Props) => {
  const [repoName, setRepoName] = useState("");
  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery(repoName);
  const HandleOnChange = rName => {
    setRepoName(rName);
  };
  const debouncedHandleOnChange = debounce(HandleOnChange, 200);
  console.log({ error });
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
          defaultValue={"test"}
          type="text"
          onChange={evt => debouncedHandleOnChange(evt.target.value)}
          onSearch={searchText => debouncedHandleOnChange(searchText)}
        />
      </CustomCard>
      <RepoList reposData={data} repoName={"test"} loading={isLoading && isFetching} />
      <ErrorState
        reposData={data}
        loading={isLoading && isFetching}
        reposError={error?.data?.message}
      />
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

// const { reposData, reposError, repoName, recommendations } = types;
const { intl } = commonPropTypes;

Repos.propTypes = {
  intl,
  ...types,
  padding: PropTypes.number,
  maxwidth: PropTypes.number,
  dispatchGithubRepos: PropTypes.func,
  dispatchClearGithubRepos: PropTypes.func
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
