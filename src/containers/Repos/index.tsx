import { Container, CustomCard, If, T } from "@common";
import { Divider, Input, Pagination, Row } from "antd";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { IRepoError, Recommendation } from "@features/repos/types";
import React, { memo, useEffect, useState } from "react";
import { debounce, get, isEmpty } from "lodash-es";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { useRouter } from "next/router";
import { Trans } from "@lingui/macro";

const { Search } = Input;

interface RepoContainerProps {
  padding?: number;
  maxwidth?: number;
  recommendations?: Recommendation[];
}

export const Repos: React.FC<RepoContainerProps> = ({ maxwidth, recommendations }) => {
  const router = useRouter();
  const [repoName, setRepoName] = useState<string>("wednesday-solutions");
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
    router.push(`/?search=${repoName}&page=${pageNumber}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery({
    repoName,
    page: Number(page),
  });

  const handleRepoSearch = debounce((repoName: string) => {
    setRepoName(repoName);
    setPage(1);
  }, 500);

  useEffect(() => {
    if (router.isReady) {
      setRepoName(router.query?.search as string);
      setPage(router.query?.page as unknown as number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (!isEmpty(repoName)) {
      router.push(`/?search=${repoName}&page=${page}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <T type="subheading">Recommendation</T>
      </Row>
      <Row justify="space-between">
        <Recommended recommendations={recommendations} />
        <YouAreAwesome href="https://www.iamawesome.com/">
          <T>
            <Trans>You Are Awesome</Trans>
          </T>
        </YouAreAwesome>
      </Row>
      <Divider />
      <CustomCard title={<Trans>Repository Search</Trans>} maxwidth={maxwidth}>
        <T marginBottom={10}>
          <Trans>Get details of repositories</Trans>
        </T>
        <Search
          data-testid="search-bar"
          type="text"
          defaultValue="wednesday-solutions"
          onChange={evt => handleRepoSearch(evt.target.value)}
          onSearch={searchText => handleRepoSearch(searchText)}
        />
      </CustomCard>
      <RepoList reposData={data} repoName={repoName} loading={isLoading && isFetching} />
      <If condition={data}>
        <Container padding={20} maxwidth={500}>
          <Pagination
            defaultCurrent={1}
            total={get(data, "totalCount", 0)}
            showSizeChanger={false}
            onChange={handlePageChange}
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

export default memo<RepoContainerProps>(Repos);
