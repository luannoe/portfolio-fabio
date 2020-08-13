import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import TemplateDefault from '../components/TemplateDefault';
import menu from '../consts/menu';
import * as cs from '../css/home';

const Home = () => {
  const [menuHover, setMenuHover] = useState(null);

  const handleKeydown = event => {
    if (event.key === '1') Router.push('/talks');
    if (event.key === '2') Router.push('/work');
    if (event.key === '3') Router.push('/about');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleMenuCss = index => {
    if (menuHover === 'enter') return cs.menuItemEnter(index);
    if (menuHover === 'leave') return cs.menuItemLeave;
  };

  const handleBackgroundCss = () => {
    if (menuHover === 'enter') return cs.backgroundLeave;
    return cs.backgroundEnter;
  };

  const handleMenuLineCss = index => {
    if (menuHover === 'enter') return cs.menuLineLeave(index);
    return cs.menuLineEnter;
  };

  return (
    <TemplateDefault title='Fábio Matsuda' description=''>
      <div className='container-fluid' css={cs.home}>
        <div className='background' css={handleBackgroundCss}>
          Fábio
          <br />
          Matsuda.
        </div>

        <header className='header'>
          <div className='heading-wrapper'>
            <hr />
            <div className='heading'>
              <h1>Fábio Matsuda</h1>
              <h2>Head of Product Design.</h2>
            </div>
          </div>

          <ul className='links'>
            <li>
              <a
                href='mailto:fabio@yuji.com'
                title='Enviar e-mail'
                target='_blank'
                rel='noreferrer'
              >
                @
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/fabioyuji/'
                title='Instagram Fabio Matsuda'
                target='_blank'
                rel='noreferrer'
              >
                ig
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/fabioyuji/'
                title='LinkedIn Fabio Matsuda'
                target='_blank'
                rel='noreferrer'
              >
                in
              </a>
            </li>
          </ul>
        </header>

        <nav
          className='menu'
          onMouseEnter={() => setMenuHover('enter')}
          onMouseLeave={() => setMenuHover('leave')}
        >
          <ul className='menu-list'>
            {menu.map((menuItem, index) => (
              <li className='menu-list--item' key={menuItem.title}>
                <a
                  className='menu-list--item--link'
                  href={menuItem.url}
                  title={menuItem.title}
                >
                  <span
                    className='menu-list--item--title'
                    css={() => handleMenuCss(index)}
                  >
                    {menuItem.title}
                  </span>
                  <hr css={() => handleMenuLineCss(index)} />
                  <span className='menu-list--item--index'>0{index + 1}.</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='info'>
          <hr />
          <span>fabio.ud@gmail.com</span>
        </div>
      </div>
    </TemplateDefault>
  );
};

export default Home;
