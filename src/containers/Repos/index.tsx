import React, { memo, useEffect, useState } from "react";
import { Box, Divider, OutlinedInput, Pagination } from "@mui/material";
import { debounce, get, isEmpty } from "lodash-es";
import { useRouter } from "next/router";
import { Trans } from "@lingui/macro";
import { skipToken } from "@reduxjs/toolkit/query";
import styled from "@emotion/styled";
import Link from "next/link";

import { Container, CustomCard, If, T } from "@common";
import { ErrorState, RepoList } from "@features/repos/components";
import { IRepoError } from "@features/repos/types";
import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";


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
  const [repoName, setRepoName] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading, isFetching } = useFetchRecommendationQuery(
    isEmpty(repoName)
      ? skipToken
      : {
          repoName,
          page,
        },
    { skip: router.isFallback }
  );

  const handlePageChange = (_: React.ChangeEvent<unknown>, pageNumber: number) => {
    setPage(pageNumber);
    updateUrlParams(repoName, pageNumber);
  };

  const handleRepoSearch = debounce((repoName: string) => {
    setRepoName(repoName);
    setPage(1);
    updateUrlParams(repoName, 1); // Update URL params immediately
  }, 500);
  const updateUrlParams = (repoName: string, pageNumber: number) => {
    router.push(`/?search=${repoName}&page=${pageNumber}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };

  useEffect(() => {
    if (router.isReady) {
      const searchParam = router.query?.search as string;
      setRepoName(searchParam || "");
      setPage(Number(router.query?.page) || 1);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (!isEmpty(repoName)) {
      updateUrlParams(repoName, page);
    }
  }, [data]);

  return (
    <Container padding={20} maxwidth={500}>
      <Box>
        <T>
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
        <OutlinedInput
          data-testid="search-bar"
          type="search"
          fullWidth
          onChange={evt => handleRepoSearch(evt.target.value)}
        />
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
