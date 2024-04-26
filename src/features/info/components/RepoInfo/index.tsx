import { CustomCard, T } from "@common";
import { RepoInfoTypes } from "@features/info/types";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { Trans } from "@lingui/macro";
import { Stack, Button, Chip } from "@mui/material";

interface RepoInfoProps {
  repoinfo: RepoInfoTypes;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ repoinfo }) => {
  const { name, description, forks, watchers, owner, stargazersCount } = repoinfo;
  const router = useRouter();
  const renderChip = (label, value) => (value ? <Chip label={label} color="primary" /> : null);

  return (
    <CustomCard>
      <Button color="primary" size="small" onClick={() => router.push("/")}>
        <Trans>Back to Search</Trans>
      </Button>
      {name ? <T variant="subtitle1">{name}</T> : null}
      {owner.login ? <T variant="subtitle2">{owner.login}</T> : null}
      {description ? <T>{description}</T> : null}

      <Stack direction="row" justifyContent="space-between" alignItems="center" textAlign="center">
        {renderChip(<Trans>Forks: {forks}</Trans>, forks)}
        {renderChip(<Trans>Watchers: {watchers}</Trans>, watchers)}
        {renderChip(<Trans>Stars: {stargazersCount}</Trans>, stargazersCount)}
      </Stack>
    </CustomCard>
  );
};

export default memo(RepoInfo);
