import { If, T } from "@common";
import { RepoInfoTypes } from "@features/info/types";
import { Button, Card, Tag } from "antd";
import { useRouter } from "next/router";
import { ReactComponentLike } from "prop-types";
import React, { memo } from "react";
import { injectIntl, IntlShape } from "react-intl";
import { compose } from "redux";
import { TextGrid } from "../styled";
import { colors } from "@themes";

interface RepoInfoProps {
  intl: IntlShape;
  repoinfo: RepoInfoTypes;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ intl, repoinfo }) => {
  const { name, description, forks, watchers, owner, stargazersCount } = repoinfo;

  const router = useRouter();

  return (
    <Card>
      <Button type="primary" size="small" onClick={() => router.push("/")}>
        {intl.formatMessage({ id: "back_to_home_button" })}
      </Button>

      <T text={name} type="heading" />
      <T text={owner.login} type="subText" />

      <T text={description} />

      <TextGrid>
        <Tag color={colors.primary}>
          {intl.formatMessage({ id: "repo_fork_count" })}:
          <If condition={forks} otherwise="0">
            {forks}
          </If>
        </Tag>

        <Tag color={colors.primary}>
          {intl.formatMessage({ id: "repo_watchers_count" })}:
          <If condition={watchers} otherwise="0">
            {watchers}
          </If>
        </Tag>

        <Tag color={colors.primary}>
          {intl.formatMessage({ id: "repo_stars_count" })}:
          <If condition={stargazersCount} otherwise="0">
            {stargazersCount}
          </If>
        </Tag>
      </TextGrid>
    </Card>
  );
};

export default compose(injectIntl, memo)(RepoInfo) as ReactComponentLike;
