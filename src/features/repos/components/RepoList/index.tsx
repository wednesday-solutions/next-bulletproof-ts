/**
 *
 * RepoList
 *
 */

import React from "react";
import get from "lodash/get";
import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { T, CustomCard, If } from "@common";
import { IResponse, RepoItem } from "@features/repos/api/getRecommendations";
import { Trans } from "@lingui/macro";

interface RepoListProps {
  reposData?: IResponse;
  loading: boolean;
  repoName: string;
}

const RepoList: React.FC<RepoListProps> = props => {
  const { reposData, loading, repoName } = props;
  const router = useRouter();

  const items: RepoItem[] = get(reposData, "items", []);
  const totalCount = get(reposData, "totalCount", 0);

  return (
    <If condition={items.length !== 0 || loading}>
      <CustomCard data-testid="repo-list">
        <Skeleton loading={loading} active>
          {repoName && <T>Search query: {repoName}</T>}
          {totalCount !== 0 && <T>Total number of matching repos: {totalCount}</T>}
          {items.map(item => (
            <CustomCard
              key={item.id}
              onClick={() => router.push(`/info/${item?.name}?owner=${item?.owner.login}`)}
            >
              {item.name}
              <T>
                <Trans> Repository Name: {item.name}</Trans>
              </T>
              <T>
                <Trans> Repository full name: {item.fullName}</Trans>
              </T>
              <T>
                <Trans> Repository stars: {item.stargazersCount}</Trans>
              </T>
            </CustomCard>
          ))}
        </Skeleton>
      </CustomCard>
    </If>
  );
};

export default RepoList;
