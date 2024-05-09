import { styled } from "@mui/material/styles";
import { Card, Chip } from "@mui/material";
import { styles } from "@themes";

interface Props {
  maxwidth: React.CSSProperties["maxWidth"];
  padding: React.CSSProperties["padding"];
}

export const Container = styled("div")<Props>`
  && {
    display: flex;
    flex-direction: column;
    max-width: ${props => props.maxwidth}px;
    width: 100%;
    margin: 0 auto;
    padding: ${props => props.padding}px;
  }
`;

export const CustomCard = styled(Card)<{ maxwidth?: React.CSSProperties["maxWidth"] }>`
  && {
    margin: 20px 0;
    padding: 1rem;
    max-width: ${props => props.maxwidth}px;
    color: ${props => props.color};
  }
`;

CustomCard.defaultProps = {
  variant: "outlined",
};

export const ClickableTags = styled(Chip)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export const AlignCenter = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  ${styles.viewHeight(100)}
`;
