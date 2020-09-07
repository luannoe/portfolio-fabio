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
    .container-fluid {
      padding-top: 60px;
      padding-bottom: 48px;

      @media (min-width: 768px) {
        padding-top: 160px;
      }

      @media (min-width: 1024px) {
        padding-top: 290px;
      }

      .content {
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
          padding-left: 15%;
        }

        @media (min-width: 1366px) {
          padding-left: 20%;
        }

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
          padding: 8px;
          margin-left: -12px;
          overflow: hidden;

          @media (min-width: 768px) {
            margin-left: 0;
            height: 396px;
            width: 100%;
            padding: 100px 20px 100px 290px;
            order: 0;
          }

          @media (min-width: 1500px) {
            padding: 180px 20px 180px 40%;
            height: 550px;
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
            font-weight: bold;
            position: absolute;
            z-index: 1;
            font-size: 300px;
            top: -50px;
            right: -56px;

            @media (min-width: 768px) {
              font-size: 600px;
              right: unset;
              top: unset;
              left: -80px;
              bottom: -170px;
            }

            @media (min-width: 1280px) {
              left: 12px;
            }

            @media (min-width: 1500px) {
              bottom: -70px;
              left: 10%;
            }
          }

          .spotify-link {
            display: none;
            position: absolute;
            bottom: 50px;

            @media (min-width: 768px) {
              display: block;
            }

            @media (min-width: 1500px) {
              bottom: 120px;
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
            font-family: 'Work Sans', serif;
            font-weight: 300;
            order: 1;
            position: relative;
            font-size: 48px;
            margin-top: 48px;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
        }

        .page-content {
          display: flex;
          flex-direction: column;
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          padding: 8px 0;
          overflow-wrap: break-word;

          @media (min-width: 768px) {
            align-self: flex-end;
            order: 2;
          }

          @media (min-width: 1024px) {
            font-size: 24px;
          }

          p {
            align-self: flex-end;
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
