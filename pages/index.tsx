import { Repos, getReccomendations } from "@features/repos";
import React, { memo } from "react";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";

export const ReposPage = () => {
  return <Repos />;
};

export async function getStaticProps() {
  const recommendations = await getReccomendations();
  return {
    props: {
      recommendations,
    },
  };
}



export default compose(injectIntl, memo)(ReposPage);
