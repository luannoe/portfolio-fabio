import { css } from '@emotion/core';

export const page = css`
  .content {
    display: flex;
    flex-direction: column;
    padding-top: 180px;

    @media (min-width: 1024px) {
      padding-top: 0;
    }

    .row {
      margin-right: -8px;
      margin-left: -8px;

      @media (min-width: 1024px) {
        justify-content: flex-end;
      }
    }

    .col-16 {
      cursor: pointer;
      height: 70vh;
      display: flex;
      flex-direction: column;
      padding-right: 8px;
      padding-left: 8px;
      margin-bottom: 16px;

      @media (min-width: 1024px) {
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
          font-weight: bold;
          font-size: 256px;
          position: absolute;
          bottom: calc(50% - 150px);
          left: -32px;

          @media (min-width: 1024px) {
            left: 4px;
            bottom: -20px;
          }
        }

        .featured-title {
          font-family: 'Playfair Display', sans-serif;
          font-weight: bold;
          font-size: 46px;
          position: absolute;
          transform: rotate(-90deg);
          transform-origin: bottom right;
          right: 4px;
          bottom: 370px;
          width: 350px;
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
            left: 8px;
          }

          &:last-of-type {
            font-family: 'Playfair Display', sans-serif;
            font-weight: bold;
            font-size: 42px;
            position: relative;
            transform: rotate(-90deg);
            transform-origin: bottom right;
            right: 12px;
            width: 400px;
            bottom: 400px;
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
