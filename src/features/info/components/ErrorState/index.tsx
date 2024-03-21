import { AlignCenter } from "@common/styled";
import { Trans } from "@lingui/macro";
import { styled } from "@mui/material/styles";

const Error = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ErrorState = () => {
  return (
    <AlignCenter>
      <Error>
        <Trans>Something Went Wrong</Trans>
      </Error>
    </AlignCenter>
  );
};

export default ErrorState;
