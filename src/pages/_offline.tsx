import React from "react";
import { Container, T } from "@common";
import { Trans } from "@lingui/macro";

const Fallback = () => (
  <Container padding={20} maxwidth={500}>
    <T>
      <Trans>You are Offline!</Trans>
    </T>
  </Container>
);

export default Fallback;
