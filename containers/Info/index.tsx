import { EmptyResult, RepoInfoError } from "@features/info/components";
import { If, Loader } from "@common";
import React from "react";
import { ReactComponentLike } from "prop-types";
import RepoInfo from "@features/info/components/RepoInfo";
import isEmpty from "lodash/isEmpty";
import { useFetchRepoInfoQuery } from "@features/info/api/getRepoInfo";
import { useRouter } from "next/router";

const Info: React.FC = () => {
  const router = useRouter();

  const { data, error, isLoading } = useFetchRepoInfoQuery({
    username: router.query.owner,
    repo: router.query.slug,
  });

  if (isLoading) return <Loader />;

  if (error || !data) return <RepoInfoError />;

  return (
    <If condition={!isEmpty(data)} otherwise={<EmptyResult />}>
      <RepoInfo repoinfo={data} />
    </If>
  );
};

export default Info as ReactComponentLike;
