import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography, font } from "./typography";
import { breakpoints } from "./breakpoints";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
});

export { font, theme, palette };
