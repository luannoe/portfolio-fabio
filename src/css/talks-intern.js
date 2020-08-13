import { css } from '@emotion/core';

export const talksIntern = css`
  h1 {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 767px) {
    header {
      background: #fff;
      padding-bottom: 0;

      > div > div {
        margin-top: 4px;
        margin-bottom: 0;
      }
    }
  }

  .content-wrapper {
    .container {
      padding-top: 60px;
      padding-bottom: 48px;

      @media (min-width: 768px) {
        padding-top: 160px;
      }

      @media (min-width: 1024px) {
        padding-top: 483px;
      }

      .content {
        display: flex;
        flex-direction: column;

        .mobile-separator {
          border-bottom: 2px solid #000;
          width: 100%;

          @media (min-width: 768px) {
            display: none;
          }
        }

        .page-featured {
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          background: #f5f5f5;
          height: 224px;
          width: calc(100% + 24px);
          padding: 32px 8px;
          margin-left: -12px;
          overflow: hidden;

          @media (min-width: 768px) {
            margin-left: -24px;
            height: 624px;
            width: calc(100% + 48px);
            padding: 182px 8px 182px 480px;
            order: 0;
          }

          @media (min-width: 1024px) {
            margin-left: 0;
            width: calc(100% + 40px);
            padding: 182px 52px 182px 480px;
          }

          h3 {
            position: relative;
            z-index: 2;
            font-family: 'Playfair Display', serif;
            font-size: 24px;
            color: #797885;
            text-align: right;

            @media (min-width: 768px) {
              font-size: 48px;
            }
          }

          .letter {
            font-family: 'Playfair Display', serif;
            position: absolute;
            z-index: 1;
            font-size: 300px;
            bottom: -50px;
            right: -50px;

            @media (min-width: 768px) {
              font-size: 600px;
              right: unset;
              left: 64px;
              bottom: 0;
            }
          }

          .spotify-link {
            display: none;
            position: absolute;
            bottom: 106px;

            @media (min-width: 768px) {
              display: block;
            }
          }
        }

        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: bold;
          margin: 18px 0 26px;
          padding: 0;
          text-align: right;

          @media (min-width: 768px) {
            order: 1;
            position: relative;
            font-size: 24px;
            margin-top: 48px;
            text-align: left;
            display: flex;
            align-items: center;
            padding-left: 82px;

            &:before {
              content: ' ';
              position: absolute;
              left: 0;
              margin-top: 2px;
              height: 2px;
              width: 64px;
              background: #000;
            }
          }
        }

        .page-content {
          display: flex;
          flex-direction: column;
          align-self: flex-end;
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          padding: 8px 0;

          @media (min-width: 768px) {
            order: 2;
          }

          @media (min-width: 1024px) {
            font-size: 32px;
          }

          p {
            align-self: flex-end;
            max-width: 1024px;
            width: 100%;

            a {
              color: #000;
              text-decoration: none;
            }
          }

          img {
            max-width: 100%;
            margin: 32px 0;
            background: #f0f0f0;
          }
        }
      }
    }
  }
`;

export default talksIntern;
