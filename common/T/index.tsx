/**
 *
 * T
 *
 */

import React, { CSSProperties, memo } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import { FormattedMessage } from "react-intl";
import { If } from "@common";
import { fonts } from "@themes";

interface Props {
  type: keyof typeof fonts["style"];
  text?: string;
  id?: string;
  values?: any;
  styles?: CSSProperties | FlattenSimpleInterpolation;
  marginBottom?: CSSProperties["marginBottom"];
}

const StyledText = styled.p<Partial<Props> & { font: ReturnType<typeof getFontStyle> }>`
  && {
    ${props => props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
    ${props => props.font()};
  }
`;

const getFontStyle = (type: keyof typeof fonts["style"]) =>
  fonts.style[type] ? fonts.style[type] : () => null;

export const T = ({ type, text, id, marginBottom, values, ...otherProps }: Props) => (
  <StyledText data-testid="t" font={getFontStyle(type)} marginBottom={marginBottom} {...otherProps}>
    <If condition={id} otherwise={text}>
      <FormattedMessage id={id} values={values} />
    </If>
  </StyledText>
);

T.defaultProps = {
  values: {},
  type: "standard",
};

const TextComponent = memo(T);
export default TextComponent;
