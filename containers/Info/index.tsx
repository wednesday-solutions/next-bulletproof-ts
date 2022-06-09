import React from "react";
import isEmpty from "lodash/isEmpty";

import { If } from "@common";
import { RepoInfo } from "@features/info/types";

interface RepoInfoProps {
  repoinfo: RepoInfo;
}

const EmptyResult = () => {
  return <h1>No Records Found</h1>;
};

const Info: React.FC<RepoInfoProps> = ({ repoinfo }) => {
  return (
    <If condition={!isEmpty(repoinfo)} otherwise={<EmptyResult />}>
      <h1>{repoinfo?.name}</h1>
      <p>{repoinfo?.description}</p>

      <p>
        <span>
          Forks: <b>{repoinfo?.forks}</b>
        </span>
        <span>
          Watchers: <b>{repoinfo?.watchers}</b>
        </span>
        <span>
          Stars: <b>{repoinfo?.stargazers_count}</b>
        </span>
      </p>
    </If>
  );
};

export default Info;
