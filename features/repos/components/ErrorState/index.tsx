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
import { commonPropTypes } from "@utils";
import { IResponse } from "@features/repos/api/getReccomendations";

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

  return (
    !loading &&
    repoError && (
      <CustomCard
        color={reposError ? "red" : "grey"}
        title={intl.formatMessage({ id: "repo_list" })}
        data-testid="error-state"
      >
        <T id={repoError} />
      </CustomCard>
    )
  );
};

const types = {
  reposData: PropTypes.shape({
    totalCount: PropTypes.number.isRequired,
    incompleteResults: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
  }),
  reposError: PropTypes.string,
  repoName: PropTypes.string,
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired })
  ),
};

const { intl, loading } = commonPropTypes;
const { reposError, reposData } = types;

ErrorState.propTypes = {
  // @ts-expect-error intl is of type IntlShape, which is not possible in PropTypes
  intl,
  loading,
  reposError,
  reposData,
};

export default compose(injectIntl)(ErrorState);
