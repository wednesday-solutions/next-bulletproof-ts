/**
 *
 * RepoList
 *
 */

import React from "react";
import get from "lodash/get";
import { Divider, Skeleton } from "@mui/material";
import { T, CustomCard, If } from "@common";
import { IResponse, IRepoItem } from "@features/repos/api/getRecommendations";
import { i18n } from "@lingui/core";
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
              {i18n._("repo.repoList.search.query", { repoName })}
            </T>
          )}
          {totalCount !== 0 && (
            <T mb={1}>
              {i18n._("repo.repoList.count", { totalCount })}
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
