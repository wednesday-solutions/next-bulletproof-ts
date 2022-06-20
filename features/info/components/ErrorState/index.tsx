import { colors } from "@themes";
import { AlignCenter } from "common/styled";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const Error = styled.div`
  color: ${colors.error};
`;

const ErrorState = () => {
  return (
    <AlignCenter>
      <Error>
        <FormattedMessage id="something_went_wrong" />
      </Error>
    </AlignCenter>
  );
};

export default ErrorState;
