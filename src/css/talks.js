import { css } from '@emotion/core';

export const page = css`
  @media (min-width: 1024px) {
    padding-right: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding-top: 180px;

    @media (min-width: 1024px) {
      padding-top: 0;
      padding-left: 11%;
    }

    @media (min-width: 1500px) {
      padding-left: 30%;
    }

    .row {
      margin-right: -8px;
      margin-left: -8px;

      @media (min-width: 1024px) {
        justify-content: flex-end;
        margin-right: 0px;
      }
    }

    .col-16 {
      cursor: pointer;
      height: 400px;
      display: flex;
      flex-direction: column;
      padding-right: 8px;
      padding-left: 8px;
      margin-bottom: 16px;

      &:hover {
        .featured-heading {
          &:after {
            background: transparent;
          }
        }
      }

      @media (min-width: 1024px) {
        height: 100vh;
      }

      @media (min-width: 1024px) and (min-height: 900px) {
        height: 95vh;
      }

      &.col-md-4 {
        @media (min-width: 768px) {
          flex: 0 0 50%;
          max-width: 50%;
        }

        @media (min-width: 1024px) {
          flex: 0 0 31%;
          max-width: 31%;
          padding-right: 0;
        }
      }

      &.col-lg-3 {
        @media (min-width: 1500px) {
          flex: 0 0 25%;
          max-width: 25%;
        }
      }

      .featured-heading {
        flex: 1;
        overflow: hidden;
        position: relative;
        user-select: none;

        &:after {
          content: ' ';
          position: absolute;
          z-index: 2;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          transition: background 0.3s;

          @media (min-width: 1024px) {
            background: rgba(255, 255, 255, 0.5);
          }
        }

        &:before {
          content: ' ';
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /*background: rgba(255, 255, 255, 0.5);*/
        }

        .featured-letter {
          font-family: 'Playfair Display', sans-serif;
          font-weight: 700;
          font-size: 280px;
          position: absolute;
          bottom: calc(50% - 150px);
          left: -38px;

          @media (min-width: 1024px) {
            left: -50px;
            bottom: -30px;
          }
        }

        .featured-title {
          font-family: 'Playfair Display', sans-serif;
          font-weight: bold;
          font-size: 48px;
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: bottom right;
          right: 4px;
          bottom: 74vh;
          width: 73vh;
          display: block;
        }
      }

      .heading {
        position: absolute;
        z-index: 2;
        color: #fff;
        height: 100%;
        left: 0;
        right: 0;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        span {
          &:first-of-type {
            font-family: 'Work Sans', sans-serif;
            font-weight: bold;
            font-size: 72px;
            position: absolute;
            top: 0;
            left: 16px;
          }

          &:last-of-type {
            font-family: 'Playfair Display', sans-serif;
            font-weight: bold;
            font-size: 48px;
            position: relative;
            transform: rotate(-90deg);
            transform-origin: bottom right;
            right: 12px;
            min-width: 380px;
            max-width: 380px;
            bottom: 390px;
          }
        }

        @media (min-width: 1024px) {
          position: relative;
          height: auto;
          min-height: 190px;
          background: #797885;
          align-items: center;
          justify-content: center;
          padding: 32px;
          font-family: 'Playfair Display', sans-serif;
          font-size: 32px;
        }
      }
    }
  }
`;

export default page;
