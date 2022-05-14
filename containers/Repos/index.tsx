import { Container, CustomCard, T } from "@common";
import { ResponseItem, useFetchRecommendationQuery } from "@features/repos/api/getReccomendations";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { fonts } from "@themes/index";
import { commonPropTypes } from "@utils";
import { Divider, Input, Row } from "antd";
import { debounce } from "lodash-es";
import PropTypes, { ReactComponentLike } from "prop-types";
import React, { memo, useState } from "react";
import { injectIntl, IntlShape } from "react-intl";
import { compose } from "redux";

const { Search } = Input;

export interface ReposData {
  incomplete_results: boolean;
  items: ResponseItem[];
  total_count: string;
}

interface Props {
  repoName: string;
  maxwidth: number;
  intl: IntlShape;
  reposData: ReposData;
  recommendations: any;
  reposError: string;
  dispatchGithubRepos: any;
  dispatchClearGithubRepos: any;
  padding: number;
}

export const Repos: React.FC<Props> = ({ intl, maxwidth, recommendations }) => {
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
  // @ts-expect-error intl is of type IntlShape, which is not possible in PropTypes
  intl,
  ...types,
  padding: PropTypes.number.isRequired,
  maxwidth: PropTypes.number.isRequired,
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
