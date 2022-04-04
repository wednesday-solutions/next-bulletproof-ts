/**
 *
 * ErrorState
 *
 */

import React from "react";
import get from "lodash/get";
import { compose } from "redux";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
import { T, CustomCard } from "@common";
import { commonPropTypes } from "@utils";

const ErrorState = props => {
  const { intl, reposError, loading, reposData } = props;
  let repoError;
  if (reposError) {
    repoError = reposError;
  } else if (!get(reposData, "totalCount", 0)) {
    repoError = "respo_search_default";
  }
  if (!loading && !repoError) {
    return null;
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
  reposData: PropTypes.arrayOf(
    PropTypes.shape({
      totalCount: PropTypes.number,
      incompleteResults: PropTypes.bool,
      items: PropTypes.array,
    })
  ),
  reposError: PropTypes.object,
  repoName: PropTypes.string,
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired })
  ),
};

const { intl, loading } = commonPropTypes;
const { reposError, reposData } = types;

ErrorState.propTypes = {
  intl,
  loading,
  reposError,
  reposData,
};

export default compose(injectIntl)(ErrorState);
