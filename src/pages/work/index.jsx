import React, { useState } from 'react';
// import Router from 'next/router';
import { pathOr } from 'ramda';
import Template from '@components/Template';
import RawHtml from '@components/RawHtml';
import { useContext } from '@context/index';
import PasswordModal from '@components/PasswordModal';
import * as cs from '@css/work';
import data from '@data/work/data.js';

const Work = () => {
  const [passwordModal, setPasswordModal] = useState(false);
  const { width } = useContext();

  const handleClick = /*id*/ () => {
    setPasswordModal(true);
    // Router.push(`/work/${id}`);
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
            {pathOr([], ['works'], data).map((work, index) => (
              <div
                className='col-16 col-md-4 col-lg-3'
                key={work.id}
                onClick={() => handleClick(work.id)}
              >
                <div className='featured-image'>
                  <img src={work.featuredImage} />
                </div>

                <div className='heading'>
                  {width < 1024 ? (
                    <>
                      <span>
                        {index < 10 ? `0${index + 1}`.slice(-2) : index}.
                      </span>
                      <RawHtml tag='span'>
                        {work.mobileTitle || work.title}
                      </RawHtml>
                    </>
                  ) : (
                    <>
                      {index < 10 ? `0${index + 1}`.slice(-2) : index}.{' '}
                      {work.title}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PasswordModal
        open={passwordModal}
        password={null}
        setPassword={() => {}}
        onSubmit={() => {}}
        onClose={() => setPasswordModal(false)}
      />
    </Template>
  );
};

export default Work;
