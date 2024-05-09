import styles from "./styles";
import { theme, CustomPalette, font, palette } from "./mui";

export { styles, font, palette };

const customTheme = theme as Omit<typeof theme, "palette"> & {
    palette: typeof theme.palette & CustomPalette
}

export default customTheme;