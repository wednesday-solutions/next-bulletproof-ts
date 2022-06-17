import { Container, CustomCard, If, T } from "@common";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
import { IRepoError, Recommendation } from "@features/repos/types";
import { fonts } from "@themes/index";
import { Divider, Input, Row, Button } from "antd";
import { debounce, get, isEmpty } from "lodash-es";
import React, { memo, useEffect, useState } from "react";
import { injectIntl, IntlShape } from "react-intl";
import { compose } from "redux";
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
  const nextPage = () => {
    setPage(val => val + 1);
    router.push(`/?search=${repoName}&page=${+page + 1}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };
  const prevPage = () => {
    setPage(val => val - 1);
    router.push(`/?search=${repoName}&page=${page - 1}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery({ repoName, page });

  const isNextButtonDisable: boolean =
    get(data, "totalCount", 0) <= 10 || get(data, "totalCount", 0) / 10 === page;

  const handleOnChange = debounce((rName: string) => {
    setRepoName(rName);
  }, 200);

  useEffect(() => {
    if (get(router, "isReady", false)) {
      setRepoName(get(router, "query.search", ""));
      setPage(get(router, "query.page", 1));
    }
  }, [get(router, "isReady")]);

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
          value={repoName}
          onChange={evt => handleOnChange(evt.target.value)}
          onSearch={searchText => handleOnChange(searchText)}
        />
      </CustomCard>
      <RepoList reposData={data} repoName={"test"} loading={isLoading && isFetching} />
      <If condition={data}>
        <Container padding={20} maxwidth={500}>
          <Row justify="center">
            <Button disabled={page === 1} loading={isFetching} onClick={prevPage}>
              prev
            </Button>
            <Button loading={isFetching} onClick={nextPage} disabled={isNextButtonDisable}>
              next
            </Button>
          </Row>
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
