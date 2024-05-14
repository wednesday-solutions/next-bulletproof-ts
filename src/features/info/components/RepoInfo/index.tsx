import { CustomCard, T } from "@common";
import { RepoInfoTypes } from "@features/info/types";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { Stack, Button, Chip } from "@mui/material";
import { i18n } from "@lingui/core";

interface RepoInfoProps {
  repoinfo: RepoInfoTypes;
}

const RepoInfo: React.FC<RepoInfoProps> = ({ repoinfo }) => {
  const { name, description, forks, watchers, owner, stargazersCount } = repoinfo;

  const router = useRouter();

  return (
    <CustomCard>
      <Button color="primary" size="small" onClick={() => router.push("/")}>
        {i18n._("repo.repoInfo.back")}
      </Button>
      {name ? <T variant="subtitle1">{name}</T> : null}

      {owner.login ? <T variant="subtitle2">{owner.login}</T> : null}

      {description ? <T>{description}</T> : null}

      <Stack direction="row" justifyContent="space-between" alignItems="center" textAlign="center">
        {forks ? <Chip label={i18n._('repo.repoInfo.forks', { forks })} color="primary" /> : null}
        {watchers ? <Chip label={i18n._("repo.repoInfo.watchers", { watchers })} color="primary" /> : null}
        {stargazersCount ? (
          <Chip label={i18n._("repo.repoInfo.stars", { stargazersCount })} color="primary" />
        ) : null}
      </Stack>
    </CustomCard>
  );
}; 

export default memo(RepoInfo);
