import { css } from '@emotion/core';

export const page = css`
  padding-top: 157px;
  padding-bottom: 48px;

  @media (min-width: 1024px) {
    padding-top: 290px;
  }

  .content {
    display: flex;
    flex-direction: column;

    .featured-image {
      width: calc(100% + 24px);
      margin-bottom: 48px;
      margin-left: -12px;
      background: #f0f0f0;

      @media (min-width: 768px) {
        width: calc(100% + 48px);
        margin-left: -24px;
      }

      @media (min-width: 1024px) {
        width: calc(100% + 40px);
        margin-left: 0;
      }
    }

    h2,
    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 14px;
      font-weight: bold;
      margin: 0;
      padding: 0;
      text-align: right;

      @media (min-width: 768px) {
        font-size: 24px;
      }

      @media (min-width: 1024px) {
        font-family: 'Work Sans', sans-serif;
        font-size: 48px;
        font-weight: 300;
      }
    }

    .page-content {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      font-family: 'Playfair Display', serif;
      font-size: 14px;
      padding: 8px 0;

      @media (min-width: 1024px) {
        font-size: 24px;

        margin-left: 15%;
      }

      @media (min-width: 1366px) {
        margin-left: 20%;
      }

      p {
        align-self: flex-end;
        width: 100%;
      }

      img {
        max-width: 100%;
        margin: 32px 0;
        background: #f0f0f0;
      }
    }
  }
`;

export default page;
