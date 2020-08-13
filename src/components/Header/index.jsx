import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import MenuIcon from '../MenuIcon';
import menu from '../../consts/menu';
import * as cs from './style';

export const Header = ({ title, icon, onClick }) => {
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [hasScroll, setHasScroll] = useState(false);
  const [menuIsOpen, _setMenuIsOpen] = useState(false);

  const refMenuIsOpen = useRef(menuIsOpen);
  const setMenuIsOpen = data => {
    refMenuIsOpen.current = data;
    _setMenuIsOpen(data);
  };

  const handleKeydown = useCallback(event => {
    if (event.key === 'm') setMenuIsOpen(!refMenuIsOpen.current);
    if (event.key === 'Escape') setMenuIsOpen(false);

    if (refMenuIsOpen.current) {
      if (event.key === '0') Router.push('/');
      if (event.key === '1') Router.push('/talks');
      if (event.key === '2') Router.push('/work');
      if (event.key === '3') Router.push('/about');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setTop(window.scrollY);
    };

    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    handleScroll();
    handleWidth();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleWidth);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleWidth);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (!hasScroll) {
      if (width < 1024 && top > 0) setHasScroll(true);
      if (width >= 1024 && top > 50) setHasScroll(true);
    }
  }, [top]);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  const handleOnClick = () => {
    if (icon === 'back') {
      onClick();
    } else {
      setMenuIsOpen(!menuIsOpen);
    }
  };

  return (
    <header
      className={`container-fluid ${hasScroll ? 'scroll' : ''}`}
      css={() => cs.header(top, menuIsOpen)}
    >
      <div className='container'>
        <MenuIcon onClick={handleOnClick} menuIsOpen={menuIsOpen} icon={icon} />

        {title && <h1>{title}</h1>}
      </div>

      {menuIsOpen && (
        <div className='menu'>
          <nav className='nav-menu'>
            <ul className='nav-menu-list'>
              {menu.map((menuItem, index) => (
                <li
                  className='nav-menu-list--item'
                  key={menuItem.title}
                  css={() => cs.menuItemEnter(index)}
                >
                  <a
                    className='nav-menu-list--item--link'
                    href={menuItem.url}
                    title={menuItem.title}
                  >
                    <span className='nav-menu-list--item--title'>
                      {menuItem.title}
                    </span>
                    <hr />
                    <span className='nav-menu-list--item--index'>
                      0{index + 1}.
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

Header.defaultProps = {
  icon: 'menu'
};

export default React.memo(Header);
