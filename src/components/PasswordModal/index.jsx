import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '../MenuIcon';
import PasswordModalCss from './style';

const PasswordModal = ({ open, password, onSubmit, onClose }) => {
  if (open) {
    const inputRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);
    const [requestStep, setRequestStep] = useState(false);
    const [requestSubmitted, setRequestSubmitted] = useState(false);
    const inputPlaceholder = useMemo(() => {
      if (requestStep) {
        if (invalidInput) return 'Wrong E-mail.';
        return 'E-mail.';
      } else {
        if (invalidInput) return 'Wrong Password.';
        return 'Insert Password.';
      }
    }, [requestStep, invalidInput]);

    useEffect(() => {
      const handleWidth = () => {
        setWidth(window.innerWidth);
      };

      handleWidth();
      inputRef.current.focus();
      document.body.style.overflowY = 'hidden';
      window.addEventListener('resize', handleWidth);

      return () => {
        document.body.style.overflowY = 'auto';
        window.removeEventListener('resize', handleWidth);
      };
    }, []);

    const handleClose = () => {
      if (requestStep && !requestSubmitted) {
        handleSecondButton();
      } else {
        document.body.style.overflowY = 'auto';
        onClose();
      }
    };

    const handleEsc = e => {
      if (onClose && e.key === 'Escape') handleClose();
    };

    const validateEmail = () => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(inputValue).toLowerCase());
    };

    const handleFirstButton = e => {
      e.preventDefault();

      if (requestStep) {
        if (inputValue && validateEmail()) {
          setRequestSubmitted(true);
          return;
        }
      } else {
        if (inputValue === password) {
          onSubmit(false);
          return;
        }
      }

      setInvalidInput(true);
      setInputValue('');
      inputRef.current.focus();
    };

    const handleSecondButton = () => {
      setInvalidInput(false);
      setInputValue('');

      if (requestStep) {
        setRequestStep(false);
      } else {
        setRequestStep(true);
      }
    };

    return (
      <div css={() => PasswordModalCss(requestSubmitted)}>
        <form
          className='password-card'
          onSubmit={handleFirstButton}
          onKeyDown={handleEsc}
        >
          <header>
            {onClose && width < 1024 && <MenuIcon onClick={handleClose} />}

            {onClose && width >= 1024 && (
              <MenuIcon onClick={handleClose} icon='menu' menuIsOpen />
            )}

            <h2 className='title'>Access.</h2>
          </header>

          <p className='submitted-message'>
            Thank you for your interest In a matter of a few days you will
            receive a password in your e-mail.
          </p>

          <section>
            <input
              value={inputValue}
              ref={inputRef}
              type={requestStep ? 'email' : 'password'}
              placeholder={inputPlaceholder}
              className={`input ${invalidInput && 'invalid'}`}
              onChange={e => setInputValue(e.target.value)}
            />

            <button
              type='button'
              onClick={handleFirstButton}
              className='submit'
            >
              {requestStep ? 'Request Access.' : 'Enter.'}
            </button>

            <button
              type='button'
              onClick={handleSecondButton}
              className='request'
            >
              {requestStep ? 'Cancel.' : 'Request Access.'}
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
