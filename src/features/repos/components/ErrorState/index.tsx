/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { T, CustomCard } from "@common";
import { IResponse } from "@features/repos/api/getRecommendations";
import { Trans, t } from "@lingui/macro";
import { useTheme } from '@mui/material/styles';

interface ErrorStateProps {
  loading: boolean;
  reposData: IResponse | undefined;
  reposError: string | undefined;
}

const ErrorState: React.FC<ErrorStateProps> = ({ reposData, reposError, loading }) => {
  const theme = useTheme();
  let repoError: string | undefined;
  if (reposError) {
    repoError = reposError;
  } else if (!get(reposData, "totalCount", 0)) {
    repoError = t`Search Default`;
  }
  return !loading && repoError ? (
    <CustomCard
      color={reposError ? `${theme.palette.error.main}` : `${theme.palette.primary.dark}`}
      data-testid="error-state"
    >
      <T variant="subtitle2">
        <Trans>Repository List</Trans>
      </T>
      <T>{repoError}</T>
    </CustomCard>
  ) : null;
};

export default ErrorState;
