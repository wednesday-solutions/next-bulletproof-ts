/**
 *
 * RepoList
 *
 */

import React from "react";
import get from "lodash/get";
import { Skeleton } from "antd";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { T, CustomCard, If } from "@common";
import { commonPropTypes } from "@utils";
import { IResponse, ResponseItem } from "@features/repos/api/getReccomendations";

interface RepoListProps {
  reposData: IResponse | undefined;
  loading: boolean;
  repoName: string;
}

const RepoList: React.FC<RepoListProps> = props => {
  const { reposData, loading, repoName } = props;
  const router = useRouter();

  const items: ResponseItem[] = get(reposData, "items", []);
  const totalCount: number = get(reposData, "totalCount", 0);
  const BlockText = props => <T display="block" {...props} />;

  return (
    <If condition={items.length !== 0 || loading}>
      <CustomCard data-testid="repo-list">
        <Skeleton loading={loading} active>
          {repoName && <BlockText id="search_query" values={{ repoName }} />}
          {totalCount !== 0 && <BlockText id="matching_repos" values={{ totalCount }} />}
          {items.map((item, index: number) => (
            <CustomCard
              key={index}
              onClick={() => router.push(`/info/${item?.name}?owner=${item?.owner.login}`)}
            >
              {item.name}
              <BlockText id="repository_name" values={{ name: item.name }} />
              <BlockText id="repository_full_name" values={{ fullName: item.fullName }} />
              <BlockText id="repository_stars" values={{ stars: item.stargazersCount }} />
            </CustomCard>
          ))}
        </Skeleton>
      </CustomCard>
    </If>
  );
};

const types = {
  reposData: PropTypes.shape({
    total_count: PropTypes.number.isRequired,
    incomplete_results: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }),
  repoName: PropTypes.string.isRequired,
};

const { loading } = commonPropTypes;
const { repoName, reposData } = types;

RepoList.propTypes = {
  loading,
  repoName,
  reposData,
};

export default RepoList;
