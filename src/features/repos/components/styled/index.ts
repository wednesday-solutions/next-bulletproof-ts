import { colors } from "@themes";
import styled from "styled-components";

export const YouAreAwesome = styled.a`
  text-align: right;

  && {
    span {
      color: ${colors.primary};
      text-decoration: underline;
      :hover {
        opacity: 0.8;
      }
    }
  }
`;
