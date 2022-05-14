import { Container, CustomCard, T } from "@common";
import { useFetchRecommendationQuery } from "@features/repos/api/getReccomendations";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { IRepoError, Recommendation } from "@features/repos/types";
import { fonts } from "@themes/index";
import { commonPropTypes } from "@utils";
import { Divider, Input, Row } from "antd";
import { debounce } from "lodash-es";
import PropTypes, { ReactComponentLike } from "prop-types";
import React, { memo, useState } from "react";
import { injectIntl, IntlShape } from "react-intl";
import { compose } from "redux";

const { Search } = Input;

interface Props {
  intl: IntlShape;
  padding: number;
  maxwidth: number;
  recommendations: Recommendation[];
}

export const Repos: React.FC<Props> = ({ intl, maxwidth, recommendations }) => {
  const [repoName, setRepoName] = useState<string>("");
  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery(repoName);
  const handleOnChange = (rName: string) => {
    setRepoName(rName);
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
        reposError={(error as IRepoError)?.data?.message}
      />
    </Container>
  );
};

const types = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired })
  ),
};

const { intl } = commonPropTypes;

Repos.propTypes = {
  // @ts-expect-error intl is of type IntlShape, which is not possible in PropTypes
  intl,
  ...types,
  padding: PropTypes.number.isRequired,
  maxwidth: PropTypes.number.isRequired,
};

Repos.defaultProps = {
  padding: 20,
  maxwidth: 500,
};

export default compose(injectIntl, memo)(Repos) as ReactComponentLike;
