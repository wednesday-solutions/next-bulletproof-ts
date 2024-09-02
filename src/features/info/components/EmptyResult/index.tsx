import React from "react";
import { Trans } from "@lingui/macro";

import { T } from "@common";

const EmptyResult = () => {
  return (
    <T>
      <Trans>No records found</Trans>
    </T>
  );
};

export default EmptyResult;
