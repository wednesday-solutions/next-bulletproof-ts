import { If, Loader } from "@common";
import { useFetchRepoInfoQuery } from "@features/info/api/getRepoInfo";
import { EmptyResult, RepoInfoError } from "@features/info/components";
import RepoInfo from "@features/info/components/RepoInfo";
import { IResponse, useFetchRepoDataQuery } from "@features/repos/api/getRepoData";
import { createSelector } from "@reduxjs/toolkit";
import { convertObjectToCamelCase } from "@utils";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import { ReactComponentLike } from "prop-types";
import React, { useMemo } from "react";

const Info: React.FC = () => {
  const { query } = useRouter();
  const { slug, owner } = query;
  let skip = false;
  let repoinfo = {};

  const selected_repo = {
    username: owner,
    repo: slug,
  };

  const selectPostsForUser = useMemo(() => {
    const emptyArray = [];
    return createSelector(
      res => res,
      (res, reponame) => reponame,
      (data, reponame) => data?.filter(repo => repo?.full_name === reponame)[0] ?? emptyArray
    );
  }, []);

  const { data: cachedData } = useFetchRepoDataQuery(slug, {
    selectFromResult: result => {
      const data = selectPostsForUser(
        result?.data?.items,
        `${selected_repo.username}/${selected_repo.repo}`
      );

      return { data: convertObjectToCamelCase<IResponse>({ ...data[0] }) };
    },
  });

  if (!isEmpty(cachedData)) skip = true;

  const { data, error, isLoading } = useFetchRepoInfoQuery(selected_repo, {
    skip,
  });

  if (isLoading) return <Loader />;

  if (error || !data || !cachedData) return <RepoInfoError />;

  skip ? (repoinfo = cachedData) : (repoinfo = data);

  return (
    <If condition={!isEmpty(repoinfo)} otherwise={<EmptyResult />}>
      <RepoInfo repoinfo={repoinfo} />
    </If>
  );
};

export default Info as ReactComponentLike;
