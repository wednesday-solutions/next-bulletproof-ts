import { compose } from "redux";
import React, { memo } from "react";
import { injectIntl } from "react-intl";
import { Info } from "@features/info";

export const RepoInfoPage = ({ repoinfo }) => {
  return <Info repoinfo={repoinfo} />;
};

// export async function getStaticProps() {
//   return {
//     props: {},
//   };
// }

export default compose(injectIntl, memo)(RepoInfoPage);
