/**
 *
 * T
 *
 */

import React, { CSSProperties, memo } from "react";
import styled, { RuleSet } from "styled-components";
import { FormattedMessage } from "react-intl";
import { fonts } from "@themes";

type TProps = {
  type: keyof typeof fonts["style"];
  text?: string;
  id?: string;
  values?: any;
  styles?: CSSProperties | RuleSet;
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

export const T = ({ type, text, id, marginBottom, values, ...otherProps }: TProps) => (
  <StyledText data-testid="t" font={getFontStyle(type)} marginBottom={marginBottom} {...otherProps}>
    {id ? <FormattedMessage id={id} values={values} /> : text}
  </StyledText>
);

T.defaultProps = {
  values: {},
  type: "standard",
};

const TextComponent = memo(T);
export default TextComponent;
