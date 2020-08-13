import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '../MenuIcon';
import PasswordModalCss from './style';

const PasswordModal = ({ open, password, onSubmit, onClose }) => {
  if (open) {
    const inputRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [inputPassword, setInputPassword] = useState('');
    const [invalidPassword, setInvalidPassword] = useState(false);

    useEffect(() => {
      const handleWidth = () => {
        setWidth(window.innerWidth);
      };

      handleWidth();
      inputRef.current.focus();
      document.body.style.overflowY = 'hidden';
      window.addEventListener('resize', handleWidth);

      () => {
        document.body.style.overflowY = 'auto';
        window.removeEventListener('resize', handleWidth);
      };
    }, []);

    const handleEsc = e => {
      if (onClose && e.key === 'Escape') onClose();
    };

    const handlePassword = e => {
      e.preventDefault();

      if (inputPassword === password) {
        onSubmit(false);
      } else {
        setInvalidPassword(true);
      }
    };

    return (
      <div css={PasswordModalCss}>
        <form
          className='password-card'
          onSubmit={handlePassword}
          onKeyDown={handleEsc}
        >
          <header>
            {onClose && width < 1024 && (
              <MenuIcon onClick={onClose} icon='back' />
            )}

            {onClose && width >= 1024 && (
              <MenuIcon onClick={onClose} menuIsOpen />
            )}

            <h2 className='title'>Access.</h2>
          </header>

          <section>
            <input
              ref={inputRef}
              type='password'
              placeholder='Insert Password.'
              className={`input ${invalidPassword && 'invalid'}`}
              onChange={e => setInputPassword(e.target.value)}
            />

            <button type='submit' className='submit'>
              Enter.
            </button>
            <button type='button' className='request'>
              Request Access.
            </button>
          </section>
        </form>
      </div>
    );
  }

  return <></>;
};

PasswordModal.propTypes = {
  open: PropTypes.bool,
  password: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
};

export default PasswordModal;
