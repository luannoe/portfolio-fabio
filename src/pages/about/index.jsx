import React from 'react';
import Template from '../../components/Template';
import RawHtml from '../../components/RawHtml';
import * as cs from '../../css/page';
import data from '../../data/about/data.json';
import { path } from 'ramda';
import { useContext } from '../../context';

const About = () => {
  const { width } = useContext();

  return (
    <Template
      withHeader
      headTitle={data.head.title}
      headDescription={data.head.description}
      title={data.title}
    >
      <div className='container-fluid' css={cs.page}>
        <div className='content'>
          {path(['content', 'featuredImage'], data) && (
            <img
              src={data.content.featuredImage}
              className='featured-image'
              alt=''
            />
          )}

          {width < 768 && path(['content', 'mobileTitle'], data) && (
            <RawHtml tag='h2'>{data.content.mobileTitle}</RawHtml>
          )}

          {width >= 768 && path(['content', 'title'], data) && (
            <RawHtml tag='h2'>{data.content.title}</RawHtml>
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
