import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import MenuIcon from '../MenuIcon';
import { useContext } from '../../context';
import * as cs from './style';

export const Header = ({ title, backRouter }) => {
  const { width } = useContext();
  const router = useRouter();
  const [top, setTop] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!hasScroll) {
      if (width < 1024 && top > 0) setHasScroll(true);
      if (width >= 1024 && top > 50) setHasScroll(true);
    }
  }, [top]);

  const handleOnClick = () => {
    router.push(backRouter || '/');
  };

  return (
    <header
      className={`container-fluid ${hasScroll ? 'scroll' : ''}`}
      css={() => cs.header(top)}
    >
      <div className='container-fluid'>
        <MenuIcon onClick={handleOnClick} />

        {title && <h1>{title}</h1>}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  backRouter: PropTypes.string
};

export default React.memo(Header);
