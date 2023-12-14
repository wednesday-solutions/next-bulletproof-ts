/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = "#26547C";
const text = "#69353F";
const textSecondary = "#f2f2f2";
const secondary = "#EFF8E2";
const success = "#70A9A1";
const error = "#ED474A";
const gotoStories = "#2E6171";

const colors = {
  transparent: "rgba(0,0,0,0)",
  // Example colors:
  text,
  textSecondary,
  primary,
  secondary,
  success,
  error,
  gotoStories,
  theme: {
    lightMode: {
      primary,
      secondary,
    },
    darkMode: {
      primary: secondary,
      secondary: primary,
    },
  },
};

export default colors;
