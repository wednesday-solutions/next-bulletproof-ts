import { useRouter } from "next/router";
import React, { memo } from "react";
import { Trans } from "@lingui/macro";
import { Stack, Button, Chip } from "@mui/material";

import { CustomCard, T } from "@common";
import { RepoInfoTypes } from "@features/info/types";


interface RepoInfoProps {
  repoinfo: RepoInfoTypes;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ repoinfo }) => {
  const { name, description, forks, watchers, owner, stargazersCount } = repoinfo;

  const router = useRouter();

  return (
    <CustomCard>
      <Button color="primary" size="small" onClick={() => router.push("/")}>
        <Trans>Back to Search</Trans>
      </Button>
      {name ? <T variant="subtitle1">{name}</T> : null}

      {owner.login ? <T variant="subtitle2">{owner.login}</T> : null}

      {description ? <T>{description}</T> : null}

      <Stack direction="row" justifyContent="space-between" alignItems="center" textAlign="center">
        {forks ? <Chip label={<Trans>Forks: {forks}</Trans>} color="primary" /> : null}

        {watchers ? <Chip label={<Trans>Watchers: {watchers}</Trans>} color="primary" /> : null}

        {stargazersCount ? (
          <Chip label={<Trans>Stars: {stargazersCount}</Trans>} color="primary" />
        ) : null}
      </Stack>
    </CustomCard>
  );
};

export default memo(RepoInfo);
