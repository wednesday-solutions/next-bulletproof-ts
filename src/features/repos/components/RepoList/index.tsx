/**
 *
 * RepoList
 *
 */

import React from "react";
import get from "lodash/get";
import { Divider, Skeleton } from "@mui/material";
import { Trans } from "@lingui/macro";
import { T, CustomCard, If } from "@common";
import { IResponse, IRepoItem } from "@features/repos/api/getRecommendations";
import RepoItem from "../RepoItem";

export interface RepoListProps {
  reposData?: IResponse;
  loading: boolean;
  repoName: string;
}

const RepoList: React.FC<RepoListProps> = props => {
  const { reposData, loading, repoName } = props;

  const items: IRepoItem[] = get(reposData, "items", []);
  const totalCount = get(reposData, "totalCount", 0);

  return (
    <If condition={items.length !== 0 || loading}>
      <CustomCard data-testid="repo-list">
        {loading && <Skeleton></Skeleton>}
        <div>
          {repoName && (
            <T>
              <Trans>Search query: {repoName}</Trans>
            </T>
          )}
          {totalCount !== 0 && (
            <T mb={1}>
              <Trans>Total number of matching repos: {totalCount}</Trans>
            </T>
          )}
          <Divider />
          {items.map(item => (
            <RepoItem key={item.id} item={item} />
          ))}
        </div>
      </CustomCard>
    </If>
  );
};

export default RepoList;
