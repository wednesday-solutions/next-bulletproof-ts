import { Songs } from "@features/songs";
import React, { memo } from "react";
import { injectIntl } from "react-intl";
import { compose } from "redux";

export const SongsPage = () => {
  return <Songs />;
};

export async function getStaticProps() {
  // const recommendations = await getReccomendations();
  return {
    props: {
      // recommendations,
    },
  };
}

export default compose(injectIntl, memo)(SongsPage);
