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

interface ErrorStateProps {
  loading: boolean;
  reposData: IResponse | undefined;
  reposError: string | undefined;
}

const ErrorState: React.FC<ErrorStateProps> = ({ reposData, reposError, loading }) => {
  let repoError: string | undefined;
  if (reposError) {
    repoError = reposError;
  } else if (!get(reposData, "totalCount", 0)) {
    repoError = t`Search Default`;
  }

  return !loading && repoError ? (
    <CustomCard
      color={reposError ? "red" : "grey"}
      title={<Trans>Repository List</Trans>}
      data-testid="error-state"
    >
      <T>{repoError}</T>
    </CustomCard>
  ) : null;
};

export default ErrorState;
