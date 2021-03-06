import React from 'react';
import { useRouter } from 'next/router';
import Template from '@components/Template';
import RawHtml from '@components/RawHtml';
import * as cs from '@css/talks';
import data from '@data/talks/data.json';
import { pathOr } from 'ramda';
import { useContext } from '@context/index';

const Talks = () => {
  const { width } = useContext();
  const router = useRouter();

  const handleClick = slug => {
    router.push(`/talks/${slug}`);
  };

  return (
    <Template
      withHeader
      headTitle={data.head.title}
      headDescription={data.head.description}
      title={data.title}
    >
      <div className='container-fluid' css={cs.page}>
        <div className='content'>
          <div className='row'>
            {pathOr([], ['talks'], data).map((talk, index) => (
              <div
                className='col-16 col-md-4 col-lg-3'
                key={talk.id}
                onClick={() => handleClick(talk.slug)}
              >
                <div className='featured-heading'>
                  <span className='featured-letter'>{talk.featuredLetter}</span>

                  {width >= 1024 && (
                    <RawHtml tag='span' className='featured-title'>
                      {talk.featuredTitle}
                    </RawHtml>
                  )}
                </div>
                <div className='heading'>
                  {width < 1024 ? (
                    <>
                      <span>
                        {index < 10 ? `0${index + 1}`.slice(-2) : index}.
                      </span>
                      <RawHtml tag='span'>
                        {talk.mobileFeaturedTitle || talk.featuredTitle}
                      </RawHtml>
                    </>
                  ) : (
                    <>
                      {index < 10 ? `0${index + 1}`.slice(-2) : index}.{' '}
                      {talk.title}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Talks;
