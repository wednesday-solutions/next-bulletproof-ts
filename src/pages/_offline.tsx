import React from "react";
import { Trans } from "@lingui/macro";

import { Container, T } from "@common";

const Fallback = () => (
  <Container padding={20} maxwidth={500}>
    <T>
      <Trans>You are Offline!</Trans>
    </T>
  </Container>
);

export default Fallback;
