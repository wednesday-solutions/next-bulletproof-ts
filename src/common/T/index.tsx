/**
 *
 * T
 *
 */

import { Typography, TypographyProps } from "@mui/material";

export type TProps = TypographyProps & {
  children: React.ReactNode;
};

export const T = ({ children, ...otherProps }: TProps) => {
  return (
    <Typography data-testid="t" {...otherProps}>
      {children}
    </Typography>
  );
};

export default T;
