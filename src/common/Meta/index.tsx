/**
 *
 * Meta
 *
 */
import React, { memo } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default memo(Meta);
