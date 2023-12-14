import { colors } from "@themes";
import { AlignCenter } from "@common/styled";
import { Trans } from "@lingui/macro";
import styled from "styled-components";

const Error = styled.div`
  color: ${colors.error};
`;

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
