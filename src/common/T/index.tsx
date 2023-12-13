/**
 *
 * T
 *
 */

import React, { CSSProperties, memo } from "react";
import styled from "styled-components";
import { fonts } from "@themes";

export type TProps = {
  type: keyof typeof fonts["style"];
  children: React.ReactNode;
  marginBottom?: CSSProperties["marginBottom"];
};

type StyleTextProps = Partial<TProps> & { font: ReturnType<typeof getFontStyle> };

const StyledText = styled.p<StyleTextProps>`
  && {
    ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
    ${props => props.font()};
  }
`;

const getFontStyle = (type: keyof typeof fonts["style"]) =>
  fonts.style[type] ? fonts.style[type] : () => null;

export const T = ({ type, children, marginBottom, ...otherProps }: TProps) => {
  return (
    <StyledText
      data-testid="t"
      font={getFontStyle(type)}
      marginBottom={marginBottom}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
};

T.defaultProps = {
  type: "standard",
};

const TextComponent = memo(T);
export default TextComponent;
