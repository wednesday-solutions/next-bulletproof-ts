import { Container, CustomCard, If, T } from "@common";
import { Divider, Input, Pagination, Row } from "antd";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { IRepoError, Recommendation } from "@features/repos/types";
import { IntlShape, injectIntl } from "react-intl";
import React, { memo, useEffect, useState } from "react";
import { debounce, get, isEmpty } from "lodash-es";
import { compose } from "redux";
import { fonts } from "@themes/index";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { useRouter } from "next/router";

const { Search } = Input;

interface RepoContainerProps {
  intl: IntlShape;
  padding: number;
  maxwidth: number;
  recommendations?: Recommendation[];
}

export const Repos: React.FC<RepoContainerProps> = ({ intl, maxwidth, recommendations }) => {
  const router = useRouter();
  const [repoName, setRepoName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const onPageChange = pageNumber => {
    setPage(pageNumber);
    router.push(`/?search=${repoName}&page=${pageNumber}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery({ repoName, page });

  const handleOnChange = debounce((rName: string) => {
    setRepoName(rName);
    setPage(1);
  }, 500);

  useEffect(() => {
    if (router?.isReady) {
      setRepoName(router.query?.search as string);
      setPage(router.query?.page as unknown as number);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isEmpty(repoName)) {
      router.push(`/?search=${repoName}&page=${page}`);
    }
  }, [data]);

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
          type="text"
          onChange={evt => handleOnChange(evt.target.value)}
          onSearch={searchText => handleOnChange(searchText)}
        />
      </CustomCard>
      <RepoList reposData={data} repoName={"test"} loading={isLoading && isFetching} />
      <If condition={data}>
        <Container padding={20} maxwidth={500}>
          <Pagination
            defaultCurrent={1}
            total={get(data, "totalCount", 0)}
            showSizeChanger={false}
            onChange={onPageChange}
          />
        </Container>
      </If>
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
