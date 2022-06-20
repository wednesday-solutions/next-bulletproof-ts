/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { compose } from "redux";
import { injectIntl, IntlShape } from "react-intl";
import { T, CustomCard } from "@common";
import { IResponse } from "@features/repos/api/getRecommendations";

interface ErrorStateProps {
  intl: IntlShape;
  loading: boolean;
  reposData: IResponse | undefined;
  reposError: string | undefined;
}

const ErrorState: React.FC<ErrorStateProps> = ({ intl, reposData, reposError, loading }) => {
  let repoError: string | undefined;
  if (reposError) {
    repoError = reposError;
  } else if (!get(reposData, "totalCount", 0)) {
    repoError = "respo_search_default";
  }

  return !loading && repoError ? (
    <CustomCard
      color={reposError ? "red" : "grey"}
      title={intl.formatMessage({ id: "repo_list" })}
      data-testid="error-state"
    >
      <T id={repoError} />
    </CustomCard>
  ) : null;
};

export default compose(injectIntl)(ErrorState);
