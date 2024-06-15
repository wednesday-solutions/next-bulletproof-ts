import { T } from "@common";
import { i18n } from "@lingui/core";
import React from "react";

const EmptyResult = () => {
  return (
    <T>
      {i18n._("repo.empty.results")}
    </T>
  );
};

export default EmptyResult;
