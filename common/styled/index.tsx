import styled, { CSSProperties } from "styled-components";
import { Card, Tag } from "antd";
import { colors, styles } from "@themes";

interface Props {
  maxwidth: CSSProperties["maxWidth"];
  padding: CSSProperties["padding"];
}

export const Container = styled.div<Props>`
  && {
    display: flex;
    flex-direction: column;
    max-width: ${props => props.maxwidth}px;
    width: 100%;
    margin: 0 auto;
    padding: ${props => props.padding}px;
  }
`;

export const CustomCard = styled(Card)<{ maxwidth?: CSSProperties["maxWidth"] }>`
  && {
    margin: 20px 0;
    max-width: ${props => props.maxwidth};
    color: ${props => props.color};
    ${props => props.color && `color: ${props.color}`};
  }
`;

export const ClickableTags = styled(Tag)`
  cursor: pointer;
  :hover {
    border: 1px solid ${colors.primary};
  }
`;

export const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${styles.viewHeight(100)}
`;
