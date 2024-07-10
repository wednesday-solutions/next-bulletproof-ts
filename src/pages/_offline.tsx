import { Container, T } from "@common";
import { i18n } from "@lingui/core";

const Fallback = () => (
  <Container padding={20} maxwidth={500}>
    <T>
      {i18n._("offline")}
    </T>
  </Container>
);

export default Fallback;
