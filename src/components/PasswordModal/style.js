import { css, keyframes } from '@emotion/core';

const bounce = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(8px);
  }
  40% {
    transform: translate(-8px);
  }
  60% {
    transform: translate(8px);
  }
  80% {
    transform: translate(-8px);
  }
  100% {
    transform: translate(0);
  }
`;

export const PasswordModalCss = requestSubmitted => css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);

  .password-card {
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    padding: 0 24px;
    position: relative;
    width: 100%;
    height: 100vh;

    .submitted-message {
      display: ${requestSubmitted ? 'block' : 'none'};
      margin-top: 32px;
      font-weight: bold;
      font-size: 14px;
    }

    header {
      .title {
        text-align: left;
        display: block;
        margin: 0;
        font-size: 64px;
      }
    }

    @media (min-width: 1024px) {
      padding: 140px 80px;
      width: max-content;
      height: max-content;

      header {
        > div {
          position: absolute;
          top: 12px;
          right: 12px;
          transform: scale(0.5);
        }

        .title {
          display: none;
        }
      }
    }

    &--close {
      width: max-content !important;
      max-width: max-content !important;
      position: absolute;
      top: 12px;
      right: 12px;
      background: transparent;
      border: 0;
    }

    section {
      flex: 1;
      display: ${requestSubmitted ? 'none' : 'flex'};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 73px;

      @media (min-width: 1024px) {
        margin-bottom: 0;
      }

      button {
        width: 300px;
        max-width: 100%;
      }

      .submit {
        background: #d8d8d8;
        border: 0;
        padding: 15px;
        outline: 0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 16px;
      }

      .request {
        background: transparent;
        border: 2px solid #c6c6c6;
        padding: 15px;
        outline: 0;
        font-size: 14px;
        font-weight: bold;
      }

      .input {
        width: 300px;
        max-width: 100%;
        background: transparent;
        padding: 13px 0;
        border: 0;
        border-bottom: 2px solid #c6c6c6;
        margin-bottom: 16px;
        text-align: center;
        font-size: 14px;
        outline: 0;

        &.invalid {
          animation: ${bounce} 0.5s ease;
          border-bottom-color: red;

          ::placeholder {
            color: red;
            opacity: 1; /* Firefox */
          }

          :-ms-input-placeholder {
            /* Internet Explorer 10-11 */
            color: red;
          }

          ::-ms-input-placeholder {
            /* Microsoft Edge */
            color: red;
          }
        }

        ::placeholder {
          color: #000;
          opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #000;
        }

        ::-ms-input-placeholder {
          /* Microsoft Edge */
          color: #000;
        }
      }
    }
  }
`;

export default PasswordModalCss;
