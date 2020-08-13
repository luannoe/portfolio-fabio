import React from 'react';
import Template from '../../components/Template';
import RawHtml from '../../components/RawHtml';
import * as cs from '../../css/page';
import data from '../../data/about/data.json';
import { path } from 'ramda';

const About = () => {
  return (
    <Template
      withHeader
      headTitle={data.head.title}
      headDescription={data.head.description}
      title={data.title}
    >
      <div className='container' css={cs.page}>
        <div className='content'>
          {path(['content', 'featuredImage'], data) && (
            <img
              src={data.content.featuredImage}
              className='featured-image'
              alt=''
            />
          )}
          {path(['content', 'title'], data) && <h2>{data.content.title}</h2>}
          {path(['content', 'subtitle'], data) && (
            <h3>{data.content.subtitle}</h3>
          )}
          {path(['content', 'text'], data) && (
            <RawHtml className='page-content'>{data.content.text}</RawHtml>
          )}
        </div>
      </div>
    </Template>
  );
};

export default About;
