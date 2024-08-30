import React from "react";
import { Stack, CircularProgress } from "@mui/material";
import { AlignCenter } from "../styled";

const Loader: React.FC = () => (
  <AlignCenter>
    <Stack>
      <CircularProgress size="large" />
    </Stack>
  </AlignCenter>
);

export default Loader;
