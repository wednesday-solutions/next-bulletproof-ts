import { screenBreakPoints } from "../utils/constants";

export const media = {
  mobile: `${screenBreakPoints.MOBILE / 16}em`,
  tablet: `${screenBreakPoints.TABLET / 16}em`,
  desktop: `${screenBreakPoints.DESKTOP / 16}em`,
};

export default media;
