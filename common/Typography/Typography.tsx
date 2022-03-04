import React, { CSSProperties } from "react";
import { HTMLAttributes } from "react";
import { FormattedMessage } from "react-intl";
import If from "common/If/If";

type TypographyTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "pre";

interface Props extends HTMLAttributes<any> {
  id: string;
  values: any;
  /**
   * @property type
   * html element to render
   */
  type?: TypographyTypes;
  /**
   * @property text
   * renders value as child
   */
  text: string | number | any;
  color?: string;
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: string;
  lineHeight?: number | string;
  letterSpacing?: number | string;
  /**
   * @property hideOnPhones
   * display = none for small screen devices.
   */
  hideOnPhones?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => unknown;
}

export type TypographyProps = Props;

// const CommonTypographyCss = css<Props>`
//   ${({ color, fontWeight, fontSize, lineHeight, letterSpacing, theme }) => `
//     color: ${color || theme.colors.text1};
//     ${fontSize ? `font-size: ${fontSize};` : ""};
//     ${fontWeight ? `font-weight: ${fontWeight};` : ""};
//     ${lineHeight ? `line-height: ${lineHeight}px;` : ""};
//     ${letterSpacing ? `letter-spacing: ${letterSpacing}px` : ""};
//     :focus-visible {
//       outline: 1px solid ${theme.colors.primary2};
//     }
//     font-family: inherit;
//   `}
// `;

// /**
//  * @description Styled Components have to created before mount.
//  *
//  */

// const H1 = styled.h1<Props>`
//   ${CommonTypographyCss}
// `;
// const H2 = styled.h2`
//   ${CommonTypographyCss}
// `;
// const H3 = styled.h3`
//   ${CommonTypographyCss}
// `;
// const H4 = styled.h4`
//   ${CommonTypographyCss}
// `;
// const H5 = styled.h5`
//   ${CommonTypographyCss}
// `;
// const H6 = styled.h6`
//   ${CommonTypographyCss}
// `;
// const P = styled.p`
//   ${CommonTypographyCss}
// `;
// const PRE = styled.pre`
//   ${CommonTypographyCss}
// `;

// const getElementByType = (type: Props["type"]) => {
//   switch (type) {
//     case "h1":
//       return H1;
//     case "h2":
//       return H2;
//     case "h3":
//       return H3;
//     case "h4":
//       return H4;
//     case "h5":
//       return H5;
//     case "h6":
//       return H6;
//     case "p":
//       return P;
//     case "pre":
//       return PRE;
//     default:
//       return P;
//   }
// };

const Typography = ({ id, values, type, text, ...rest }: Props) => {
  // const Element: StyledComponent<TypographyTypes, any> = getElementByType(type || "h3");
  return (
    <div {...rest}>
      <If condition={id} otherwise={text}>
        <FormattedMessage id={id} values={values} />
      </If>
    </div>
  );
};

Typography.propTypes = {};

Typography.defaultProps = {
  type: "h3",
  text: "",
  values: {},
};

export default Typography;
