/**
 *
 * Clickable
 *
 */

import React, { ReactEventHandler } from "react";
import PropTypes from "prop-types";
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

const Clickable = ({ onClick, textId }: Props) => {
  return (
    <StyledClickable data-testid="clickable" onClick={onClick}>
      {textId && <T id={textId} />}
    </StyledClickable>
  );
};

Clickable.propTypes = {
  onClick: PropTypes.func.isRequired,
  textId: PropTypes.string.isRequired,
};

export default Clickable;
