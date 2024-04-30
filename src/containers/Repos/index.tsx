import { Container, CustomCard, If, T } from "@common";
import { Box, Divider, Link, OutlinedInput, Pagination, FormControl, InputLabel } from "@mui/material";
import { ErrorState, RepoList } from "@features/repos/components";
import { IRepoError } from "@features/repos/types";
import React, { memo, useEffect, useState } from "react";
import { debounce, get, isEmpty } from "lodash-es";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { useRouter } from "next/router";
import { Trans } from "@lingui/macro";
import { skipToken } from "@reduxjs/toolkit/query";
import styled from "@emotion/styled";

interface RepoContainerProps {
  padding?: number;
  maxwidth?: number;
}

const StyledSpan = styled.span`
  color: darkblue;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Repos: React.FC<RepoContainerProps> = ({ maxwidth }) => {
  const router = useRouter();
  const [repoName, setRepoName] = useState<string>("react");
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery(
    isEmpty(repoName)
      ? skipToken
      : {
          repoName,
          page: Number(page),
        },
    { skip: router.isFallback }
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
    setPage(pageNumber);
    router.push(`/?search=${repoName}&page=${pageNumber}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

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
    <Container padding={20} maxwidth={500}>
      <Box>
        <T variant="h5">
          <Trans>Recommendation</Trans>
        </T>
      </Box>
      <Box justifyContent="space-between">
        <StyledLink href="https://www.iamawesome.com/">
          <T>
            <Trans>
              <StyledSpan>You Are Awesome</StyledSpan>
            </Trans>
          </T>
        </StyledLink>
      </Box>
      <Divider />
      <CustomCard maxwidth={maxwidth}>
        <T variant="h6">
          <Trans>Repository Search</Trans>
        </T>
        <T marginBottom={1}>
          <Trans>Get details of repositories</Trans>
        </T>
        <FormControl fullWidth>
          <InputLabel htmlFor="repo-search">Search</InputLabel>
          <OutlinedInput
            id="repo-search"
            data-testid="search-bar"
            type="search"
            fullWidth
            onChange={evt => handleRepoSearch(evt.target.value)}
            label="Search"
          />
        </FormControl>
      </CustomCard>
      <RepoList reposData={data} repoName={repoName} loading={isLoading && isFetching} />
      <If condition={data}>
        <Container padding={20} maxwidth={500}>
          <Pagination
            defaultValue={1}
            count={get(data, "totalCount", 0)}
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
