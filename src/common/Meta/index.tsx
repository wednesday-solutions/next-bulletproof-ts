/**
 *
 * Meta
 *
 */

import Head from "next/head";
import React, { memo } from "react";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  );
};

export default memo(Meta);
