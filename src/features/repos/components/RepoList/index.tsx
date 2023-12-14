/**
 *
 * RepoList
 *
 */

import React from "react";
import get from "lodash/get";
import { Skeleton } from "antd";
import { T, CustomCard, If } from "@common";
import { IResponse, IRepoItem } from "@features/repos/api/getRecommendations";
import { Trans } from "@lingui/macro";
import RepoItem from "../RepoItem";

interface RepoListProps {
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
        <Skeleton loading={loading} active>
          <div>
            {repoName && (
              <T>
                <Trans>Search query: {repoName}</Trans>
              </T>
            )}
            {totalCount !== 0 && (
              <T>
                <Trans>Total number of matching repos: {totalCount}</Trans>
              </T>
            )}
            {items.map(item => (
              <RepoItem key={item.id} item={item} />
            ))}
          </div>
        </Skeleton>
      </CustomCard>
    </If>
  );
};

export default RepoList;
