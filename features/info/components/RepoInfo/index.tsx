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

      <If condition={name}>
        <T text={name} type="heading" />
      </If>

      <If condition={owner.login}>
        <T text={owner.login} type="subText" />
      </If>

      <If condition={description}>
        <T text={description} />
      </If>

      <TextGrid>
        <If condition={forks}>
          <Tag color={colors.primary}>
            {intl.formatMessage({ id: "repo_fork_count" })}: {forks}
          </Tag>
        </If>

        <If condition={watchers}>
          <Tag color={colors.primary}>
            {intl.formatMessage({ id: "repo_watchers_count" })}: {watchers}
          </Tag>
        </If>

        <If condition={stargazersCount}>
          <Tag color={colors.primary}>
            {intl.formatMessage({ id: "repo_stars_count" })}: {stargazersCount}
          </Tag>
        </If>
      </TextGrid>
    </Card>
  );
};

export default compose(injectIntl, memo)(RepoInfo) as ReactComponentLike;
