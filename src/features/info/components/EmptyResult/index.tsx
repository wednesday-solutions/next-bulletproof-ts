import { T } from "@common";
import { Trans } from "@lingui/macro";
import React from "react";

const EmptyResult = () => {
  return (
    <T>
      <Trans id="repo.empty.results">No records found</Trans>
    </T>
  );
};

export default EmptyResult;
