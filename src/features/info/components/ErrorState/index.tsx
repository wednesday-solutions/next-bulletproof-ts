import React from "react";
import { AlignCenter } from "@common/styled";
import { Trans } from "@lingui/macro";
import { styled } from "@mui/material/styles";

const ErrorComponent = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ErrorState = () => {
  return (
    <AlignCenter>
      <ErrorComponent>
        <Trans>Something Went Wrong</Trans>
      </ErrorComponent>
    </AlignCenter>
  );
};

export default ErrorState;
