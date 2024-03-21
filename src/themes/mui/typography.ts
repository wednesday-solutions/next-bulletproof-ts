import { ThemeOptions } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

export const font = Montserrat({ subsets: ["latin"] });

export const typography: ThemeOptions["typography"] = {
  fontFamily: font.style.fontFamily,
};
