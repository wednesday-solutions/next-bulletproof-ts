/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { T, CustomCard } from "@common";
import { IResponse } from "@features/repos/api/getRecommendations";
import { i18n } from "@lingui/core";
import theme from "@app/themes";

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
    repoError = i18n._("repo.repoList.error.noResults");
  }
  return !loading && repoError ? (
    <CustomCard color={reposError ? `${theme.palette.error.main}` : `${theme.palette.customColor.main[500]}`} data-testid="error-state">
      <T variant="subtitle2">
        {i18n._("repo.repoList")}
      </T>
      <T>{repoError}</T>
    </CustomCard>
  ) : null;
};

export default ErrorState;
