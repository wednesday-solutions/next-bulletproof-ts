import { Container, CustomCard, T } from "@common";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { IRepoError, Recommendation } from "@features/repos/types";
import { fonts } from "@themes/index";
import { Divider, Input, Row } from "antd";
import { debounce } from "lodash-es";
import React, { memo, useState } from "react";
import { injectIntl, IntlShape } from "react-intl";
import { compose } from "redux";

const { Search } = Input;

interface RepoContainerProps {
  intl: IntlShape;
  padding: number;
  maxwidth: number;
  recommendations?: Recommendation[];
}

export const Repos: React.FC<RepoContainerProps> = ({ intl, maxwidth, recommendations }) => {
  const [repoName, setRepoName] = useState<string>("");
  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery(repoName);
  const handleOnChange = debounce((rName: string) => {
    setRepoName(rName);
  }, 200);

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
          onChange={evt => handleOnChange(evt.target.value)}
          onSearch={searchText => handleOnChange(searchText)}
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

Repos.defaultProps = {
  padding: 20,
  maxwidth: 500,
};

export default compose(injectIntl, memo)(Repos);
