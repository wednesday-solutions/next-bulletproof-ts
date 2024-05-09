import { PaletteOptions } from "@mui/material/styles";
import { blue, purple, green, red, amber } from "@mui/material/colors";
import { Color } from "@mui/material";

export type CustomPalette = {
  customColor: {
    main: Color | string;
  }
}
/**
 * @desc Refer documentation for clarity
 * @link https://mui.com/material-ui/customization/palette/
 */
export const palette: PaletteOptions & CustomPalette = {
  primary: blue,
  secondary: purple,
  success: green,
  error: red,
  warning: amber,
  customColor: {
    main: "#141414",
  }
};
