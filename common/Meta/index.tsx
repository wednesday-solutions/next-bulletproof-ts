/**
 *
 * Meta
 *
 */

import Head from 'next/head';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import favicon from '@images/favicon.ico';

function Meta({ title, description, useTranslation }) {
  let intl;
  if (useTranslation) {
    intl = useIntl();
  }

  return (
    <Head>
      <title>{useTranslation ? intl.formatMessage({ id: title }) : title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={useTranslation ? intl.formatMessage({ id: description }) : description} />
      <link rel="shortcut icon" href={favicon} />
    </Head>
  );
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  useTranslation: PropTypes.bool
};

export default memo(Meta);
