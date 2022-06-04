/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { compose } from "redux";
import PropTypes from "prop-types";
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

const types = {
  reposData: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    incompleteResults: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }),
};

const { reposData } = types;

ErrorState.propTypes = {
  // @ts-expect-error intl is of type IntlShape, which is not possible in PropTypes
  intl: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  reposError: PropTypes.string,
  reposData,
};

export default compose(injectIntl)(ErrorState);
