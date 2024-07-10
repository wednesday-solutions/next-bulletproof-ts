import { AlignCenter } from "@common/styled";
import { i18n } from "@lingui/core";
import { styled } from "@mui/material/styles";

const Error = styled("div")(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ErrorState = () => {
  return (
    <AlignCenter>
      <Error>
        {i18n._("repo.error.state")}
      </Error>
    </AlignCenter>
  );
};

export default ErrorState;
