/**
 *
 * Meta
 *
 */

import Head from "next/head";
import React, { memo } from "react";
import { useIntl } from "react-intl";

const Meta = ({ title, description, useTranslation }) => {
  const intl = useIntl();
  return (
    <Head>
      <title>{useTranslation ? intl.formatMessage({ id: title }) : title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={useTranslation ? intl.formatMessage({ id: description }) : description}
      />
      <link rel="shortcut icon" href={"../../public/favicon.ico"} />
    </Head>
  );
};

export default memo(Meta);
