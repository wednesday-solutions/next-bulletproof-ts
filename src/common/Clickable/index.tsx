/**
 *
 * Clickable
 *
 */

import React from "react";
import styled from "styled-components";

interface Props {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

const StyledClickable = styled.div`
  color: #1890ff;
  &:hover {
    cursor: pointer;
  }
`;

const Clickable: React.FC<Props> = ({ onClick, children }) => {
  return (
    <StyledClickable role="button" data-testid="clickable" onClick={onClick}>
      {children}
    </StyledClickable>
  );
};

export default Clickable;
