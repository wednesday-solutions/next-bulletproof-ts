import { Container, CustomCard, If, T } from "@common";
import { Divider, Input, Pagination, Row } from "antd";
// import { ErrorState, Recommended, RepoList, YouAreAwesome } from "@features/repos/components";
// import { IRepoError, Recommendation } from "@features/repos/types";
import { IntlShape, injectIntl } from "react-intl";
import React, { memo, useEffect, useState } from "react";
// import { debounce, get, isEmpty } from "lodash-es";
import { compose } from "redux";
import { fonts } from "@themes/index";
// import { useFetchRecommendationQuery } from "@features/repos/api/getRecommendations";
import { useRouter } from "next/router";

interface SongContainerProps {
  intl: IntlShape;
}

export const Songs: React.FC<SongContainerProps> = ({ intl }) => {
  return (
    <Container
      padding={20}
      maxwidth={500}
      style={{
        height: "100vh",
        alignSelf: "center",
      }}
    >
      Songs grid
    </Container>
  );
};

export default compose(injectIntl, memo)(Songs);
