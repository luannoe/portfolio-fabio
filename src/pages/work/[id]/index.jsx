import React, { useEffect, useState } from 'react';
import { path } from 'ramda';

import Template from '@components/Template';
import RawHtml from '@components/RawHtml';
import PasswordModal from '@components/PasswordModal';
import * as cs from '@css/page';
import data from '@data/work/dataInternal.json';

const WorkContent = () => {
  const [loading, setLoading] = useState(true);
  const [hasPassword, setHasPassword] = useState(false);

  useEffect(() => {
    if (data.password) {
      setHasPassword(true);
    }

    setLoading(false);
  }, []);

  return (
    <Template
      withHeader
      headTitle={data.head.title}
      headDescription={data.head.description}
      title={data.title}
    >
      <div className='container' css={cs.page}>
        <div className='content'>
          <PasswordModal
            open={!loading && hasPassword}
            password={data.password}
            onSubmit={() => setHasPassword(false)}
          />

          {loading && 'Carregando'}

          {!loading && (
            <>
              {path(['content', 'featuredImage'], data) && (
                <img
                  src={data.content.featuredImage}
                  className='featured-image'
                  alt=''
                />
              )}
              {path(['content', 'title'], data) && (
                <h2>{data.content.title}</h2>
              )}
              {path(['content', 'subtitle'], data) && (
                <h3>{data.content.subtitle}</h3>
              )}
              {!hasPassword && path(['content', 'text'], data) && (
                <RawHtml className='page-content'>{data.content.text}</RawHtml>
              )}
            </>
          )}
        </div>
      </div>
    </Template>
  );
};

export default WorkContent;
