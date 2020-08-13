import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { path } from 'ramda';

import Template from '@components/Template';
import RawHtml from '@components/RawHtml';
import * as cs from '@css/talks-intern';

import ListenOnSpotify from '@assets/listen-on-spotify.svg';

const TalksContent = data => {
  const router = useRouter();

  useEffect(() => {
    if (!data.content) router.push('/talks');
  }, []);

  const handleClick = () => {
    router.push('/talks');
  };

  if (data.head && data.content && data.title) {
    return (
      <div css={cs.talksIntern}>
        <Template
          withHeader
          headTitle={data.head.title}
          headDescription={data.head.description}
          title={data.title}
          icon='back'
          onClick={handleClick}
        >
          <div className='content-wrapper'>
            <div className='container'>
              <div className='content'>
                <hr className='mobile-separator' />

                {path(['content', 'title'], data) && (
                  <h2>{data.content.title}</h2>
                )}

                <div className='page-featured'>
                  {path(['content', 'letter'], data) && (
                    <span className='letter'>{data.content.letter}</span>
                  )}

                  {path(['content', 'subtitle'], data) && (
                    <h3>{data.content.subtitle}</h3>
                  )}

                  {data.content.spotify && (
                    <a
                      className='spotify-link'
                      href={data.content.spotify}
                      title='Podcast IxDA BH 01 - Design e liderança com Fabio Matsuda no Spotify'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={ListenOnSpotify} />
                    </a>
                  )}
                </div>

                {path(['content', 'text'], data) && (
                  <RawHtml className='page-content'>
                    {data.content.text}
                  </RawHtml>
                )}
              </div>
            </div>
          </div>
        </Template>
      </div>
    );
  }

  return <></>;
};

TalksContent.getInitialProps = ctx => {
  let data = {};

  switch (ctx.query.slug) {
    case 'design-leadership':
      data = require('@data/talks/design-leadership.json');
      break;
    case 'ixda-design-leadership':
      data = require('@data/talks/ixda-design-leadership.json');
      break;
    default:
      break;
  }

  return data;
};

TalksContent.propTypes = {
  slug: PropTypes.string
};

export default TalksContent;
