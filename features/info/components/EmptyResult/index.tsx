import { T } from "@common";
import { compose } from "@reduxjs/toolkit";
import React from "react";
import { injectIntl, IntlShape } from "react-intl";

interface EmptyResultsProps {
  intl: IntlShape;
}

const EmptyResult: React.FC<EmptyResultsProps> = ({ intl }) => {
  return <T text={intl.formatMessage({ id: "not_found" })} />;
};

export default compose(injectIntl)(EmptyResult);
