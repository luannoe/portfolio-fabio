import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import GlobalCss from '../css/global';
import Head from 'next/head';

export const TemplateDefault = ({
  children,
  title,
  description,
  canonical
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        {canonical && <link rel='canonical' href={canonical} />}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Global styles={() => GlobalCss({})} />
      {children}
    </>
  );
};

TemplateDefault.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

TemplateDefault.defaultProps = {
  canonical: undefined
};

export default TemplateDefault;
