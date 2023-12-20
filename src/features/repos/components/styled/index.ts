import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

export const YouAreAwesomeLink = styled(Link)(({ theme }) => ({
  textAlign: "right",
  span: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    "&:hover": {
      opacity: 0.8,
    },
  },
}));
