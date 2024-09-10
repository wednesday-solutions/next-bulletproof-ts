import React from "react";
import { Trans } from "@lingui/macro";
import { styled } from "@mui/material/styles";
import { AlignCenter } from "@common/styled";

const ErrorContainer = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ErrorState = () => {
  return (
    <AlignCenter>
      <ErrorContainer>
        <Trans>Something Went Wrong</Trans>
      </ErrorContainer>
    </AlignCenter>
  );
};

export default ErrorState;
