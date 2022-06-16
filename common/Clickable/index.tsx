/**
 *
 * Clickable
 *
 */

import React, { ReactEventHandler } from "react";
import styled from "styled-components";
import { T } from "@common";

interface Props {
  onClick: ReactEventHandler;
  textId: string;
}

const StyledClickable = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

const Clickable: React.FC<Props> = ({ onClick, textId }) => {
  return (
    <StyledClickable data-testid="clickable" onClick={onClick}>
      {textId && <T id={textId} />}
    </StyledClickable>
  );
};

export default Clickable;
