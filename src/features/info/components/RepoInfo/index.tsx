import { CustomCard, If, T } from "@common";
import { RepoInfoTypes } from "@features/info/types";
import { colors } from "@themes";
import { Button, Tag } from "antd";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { TextGrid } from "../styled";
import { Trans } from "@lingui/macro";

interface RepoInfoProps {
  repoinfo: RepoInfoTypes;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ repoinfo }) => {
  const { name, description, forks, watchers, owner, stargazersCount } = repoinfo;

  const router = useRouter();

  return (
    <CustomCard>
      <Button type="primary" size="small" onClick={() => router.push("/")}>
        <Trans>Back to Search</Trans>
      </Button>

      <If condition={!isEmpty(name)}>
        <T type="heading">{name}</T>
      </If>

      <If condition={!isEmpty(owner.login)}>
        <T type="subText">{owner.login}</T>
      </If>

      <If condition={!isEmpty(description)}>
        <T>{description}</T>
      </If>

      <TextGrid>
        <If condition={isEmpty(forks)}>
          <Tag color={colors.primary}>
            <Trans>Forks</Trans>: {forks}
          </Tag>
        </If>

        <If condition={isEmpty(watchers)}>
          <Tag color={colors.primary}>
            <Trans>Watchers</Trans>: {watchers}
          </Tag>
        </If>

        <If condition={isEmpty(stargazersCount)}>
          <Tag color={colors.primary}>
            <Trans>Stars</Trans>: {stargazersCount}
          </Tag>
        </If>
      </TextGrid>
    </CustomCard>
  );
};

export default memo(RepoInfo);
