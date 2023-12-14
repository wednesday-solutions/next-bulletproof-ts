import { RuleSet, css } from "styled-components";
import colors from "../colors";
import styles, { configureFlex } from "../styles";
import { normalizeStyledCss } from "@utils/testUtils";

describe("Tests for styles", () => {
  let expectedResult: RuleSet;
  it("should return height stylings with passed value", () => {
    const height = styles.height;
    const value = 4;
    expectedResult = css`
      height: ${value}rem;
    `;
    expect(normalizeStyledCss(height(value))).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return the z-index styling according to the value passed", () => {
    const zIndexValue = 2;
    expectedResult = css`
      z-index: ${zIndexValue};
    `;
    expect(normalizeStyledCss(styles.zIndex(zIndexValue))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the textEllipsis styling according to the width passed", () => {
    const width = "100px";
    expectedResult = css`
      white-space: nowrap;
      overflow: hidden;
      width: ${width};
      text-overflow: ellipsis;
    `;
    expect(normalizeStyledCss(styles.textEllipsis(width))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return primaryBackgroundColor styling", () => {
    expectedResult = css`
      background-color: ${colors.primary};
    `;
    expect(normalizeStyledCss(styles.primaryBackgroundColor())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the boxShadow stylings according to values passed", () => {
    const hOffset = 2;
    const vOffset = 1;
    const blur = 4.3;
    const spread = 2;
    const color = colors.primary;
    expectedResult = css`
      box-shadow: ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color};
    `;
    expect(normalizeStyledCss(styles.boxShadow(hOffset, vOffset, blur, spread, color))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the borderRaduis stylings according to the radius value and types passed", () => {
    let radius: string | number = 12;
    let expectedResult = css`
      border-radius: ${radius + `${typeof radius === `string` ? `;` : `px`}`};
    `;
    expect(normalizeStyledCss(styles.borderRadius(radius))).toEqual(
      normalizeStyledCss(expectedResult)
    );

    radius = "12px";
    expectedResult = css`
      border-radius: ${radius + `${typeof radius === `string` ? `;` : `px`}`};
    `;
    expect(normalizeStyledCss(styles.borderRadius(radius))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the borderWithRadius stylings according to values passed", () => {
    const width = 2;
    const type = "dashed";
    const color = colors.success;
    const radius = 12;
    expectedResult = css`
      border: ${width}px ${type} ${color};
      ${styles.borderRadius(radius)}
    `;
    expect(normalizeStyledCss(styles.borderWithRadius(width, type, color, radius))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return borderRadiusBottom stylings according to the bottomRadius value passed", () => {
    const bottomRadius = 4;
    expectedResult = css`
      border-bottom-left-radius: ${bottomRadius}px;
      border-bottom-right-radius: ${bottomRadius}px;
    `;
    expect(normalizeStyledCss(styles.borderRadiusBottom(bottomRadius))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return borderRadiusTop stylings according to the topRadius value passed", () => {
    const topRadius = 4;
    expectedResult = css`
      border-top-left-radius: ${topRadius}px;
      border-top-right-radius: ${topRadius}px;
    `;
    expect(normalizeStyledCss(styles.borderRadiusTop(topRadius))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the margin-top Styling according to the top distance value provided", () => {
    const marginTop = 12;
    expectedResult = css`
      margin-top: ${marginTop}rem;
    `;
    expect(normalizeStyledCss(styles.margin.top(marginTop))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the margin-bottom Styling according to the bottom distance value provided", () => {
    const marginBottom = 12;
    expectedResult = css`
      margin-bottom: ${marginBottom}rem;
    `;
    expect(normalizeStyledCss(styles.margin.bottom(marginBottom))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the margin-left Styling according to the left distance value provided", () => {
    const marginLeft = 12;
    expectedResult = css`
      margin-left: ${marginLeft}rem;
    `;
    expect(normalizeStyledCss(styles.margin.left(marginLeft))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the margin-left Styling according to the left distance value provided", () => {
    const marginRight = 12;
    expectedResult = css`
      margin-right: ${marginRight}rem;
    `;
    expect(normalizeStyledCss(styles.margin.right(marginRight))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the vertical margin styilngs according to the verticalMargin value passed", () => {
    const verticalMargin = 10;
    expectedResult = css`
      margin-top: ${verticalMargin}rem;
      margin-bottom: ${verticalMargin}rem;
    `;
    expect(normalizeStyledCss(styles.margin.vertical(verticalMargin))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the horizontal margin styilngs according to the horizontalMargin value passed", () => {
    const horizontalMargin = 10;
    expectedResult = css`
      margin-left: ${horizontalMargin}rem;
      margin-right: ${horizontalMargin}rem;
    `;
    expect(normalizeStyledCss(styles.margin.horizontal(horizontalMargin))).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the row stylings", () => {
    expectedResult = css`
      display: flex;
      flex: 1;
      flex-direction: row;
    `;
    expect(normalizeStyledCss(styles.flexConfig.row())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return the rowCenter stylings", () => {
    expectedResult = css`
      ${configureFlex("row", "center", "center", "center")};
    `;
    expect(normalizeStyledCss(styles.flexConfig.rowCenter())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the stylings of column", () => {
    expectedResult = css`
      display: flex;
      flex: 1;
      flex-direction: column;
    `;
    expect(normalizeStyledCss(styles.flexConfig.column())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return the unequalColumns stylings", () => {
    expectedResult = css`
      ${configureFlex("column", "", "", "", 0, 0, 0)};
    `;
    expect(normalizeStyledCss(styles.flexConfig.unequalColumns())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default height stylings", () => {
    const height = 4;
    expectedResult = css`
      height: ${height}rem;
    `;
    expect(normalizeStyledCss(styles.height())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default marginTop stylings", () => {
    const marginTop = 0;
    expectedResult = css`
      margin-top: ${marginTop}rem;
    `;
    expect(normalizeStyledCss(styles.margin.top())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default marginLeft stylings", () => {
    const marginLeft = 0;
    expectedResult = css`
      margin-left: ${marginLeft}rem;
    `;
    expect(normalizeStyledCss(styles.margin.left())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default marginRight stylings", () => {
    const marginRight = 0;
    expectedResult = css`
      margin-right: ${marginRight}rem;
    `;
    expect(normalizeStyledCss(styles.margin.right())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default marginBottom stylings", () => {
    const marginBottom = 0;
    expectedResult = css`
      margin-bottom: ${marginBottom}rem;
    `;
    expect(normalizeStyledCss(styles.margin.bottom())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default verticalMargin stylings", () => {
    const verticalMargin = 0;
    expectedResult = css`
      margin-top: ${verticalMargin}rem;
      margin-bottom: ${verticalMargin}rem;
    `;
    expect(normalizeStyledCss(styles.margin.vertical())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default horizontalMargin stylings", () => {
    const horizontalMargin = 0;
    expectedResult = css`
      margin-left: ${horizontalMargin}rem;
      margin-right: ${horizontalMargin}rem;
    `;
    expect(normalizeStyledCss(styles.margin.horizontal())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default borderRadiusBottom stylings", () => {
    const bottomRadius = 0;
    expectedResult = css`
      border-bottom-left-radius: ${bottomRadius}px;
      border-bottom-right-radius: ${bottomRadius}px;
    `;
    expect(normalizeStyledCss(styles.borderRadiusBottom())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default borderRadiusTop stylings", () => {
    const topRadius = 0;
    expectedResult = css`
      border-top-left-radius: ${topRadius}px;
      border-top-right-radius: ${topRadius}px;
    `;
    expect(normalizeStyledCss(styles.borderRadiusTop())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default borderWithRadius stylings", () => {
    const width = 1;
    const type = "solid";
    const color = "#ccc";
    const radius = 0;

    expectedResult = css`
      border: ${width}px ${type} ${color};
      ${styles.borderRadius(radius)}
    `;
    expect(normalizeStyledCss(styles.borderWithRadius())).toEqual(
      normalizeStyledCss(expectedResult)
    );
  });

  it("should return default boxShadow stylings", () => {
    const hOffset = 0;
    const vOffset = 0;
    const blur = 0;
    const spread = 0;
    const color = "#ccc";

    expectedResult = css`
      box-shadow: ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color};
    `;
    expect(normalizeStyledCss(styles.boxShadow())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default z-index stylings", () => {
    const z = 1;
    expectedResult = css`
      z-index: ${z};
    `;
    expect(normalizeStyledCss(styles.zIndex())).toEqual(normalizeStyledCss(expectedResult));
  });

  it("should return default textEllipsis stylings", () => {
    const width = "200px";
    expectedResult = css`
      white-space: nowrap;
      overflow: hidden;
      width: ${width};
      text-overflow: ellipsis;
    `;
    expect(normalizeStyledCss(styles.textEllipsis())).toEqual(normalizeStyledCss(expectedResult));
  });
});

describe("Tests for ConfigureFlex method", () => {
  let direction: string;
  let justifyContent: string;
  let alignItems: string;
  let alignContent: string;
  let flexBasis: number;
  let flexGrow: number;
  let flexShrink: number;
  let expectedResult: RuleSet;

  it("should return the css styling according to the values passed", () => {
    direction = "column";
    justifyContent = "space-around";
    alignItems = "baseline";
    alignContent = "baseline";
    flexBasis = 1;
    flexGrow = 1.2;
    flexShrink = 1;
    expectedResult = css`
      ${styles.flexConfig.column()}
      flex-direction: ${direction};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      align-content: ${alignContent};
      flex-basis: ${flexBasis};
      flex-grow: ${flexGrow};
      flex-shrink: ${flexShrink};
    `;
    expect(
      normalizeStyledCss(
        configureFlex(
          direction,
          justifyContent,
          alignItems,
          alignContent,
          flexBasis,
          flexGrow,
          flexShrink
        )
      )
    ).toEqual(normalizeStyledCss(expectedResult));
  });
  it("should return the default css styling accordingly", () => {
    direction = "row";
    justifyContent = "center";
    alignItems = "center";
    alignContent = "center";
    flexBasis = 0;
    flexGrow = 1;
    flexShrink = 0;
    expectedResult = css`
      ${styles.flexConfig.row()}
      flex-direction: ${direction};
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      align-content: ${alignContent};
      flex-basis: ${flexBasis};
      flex-grow: ${flexGrow};
      flex-shrink: ${flexShrink};
    `;
    expect(normalizeStyledCss(configureFlex())).toEqual(normalizeStyledCss(expectedResult));
  });
});
