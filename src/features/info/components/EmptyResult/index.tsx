import { T } from "@common";
import { Trans } from "@lingui/macro";
import React from "react";

const EmptyResult = () => {
  return (
    <T>
      <Trans>No records found</Trans>
    </T>
  );
};

export default EmptyResult;
