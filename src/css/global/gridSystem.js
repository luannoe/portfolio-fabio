// Exported from Bootstrap v4 with the following variables:
// $grid-breakpoints: (
//     xs: 0,
//     sm: 320px,
//     md: 768px,
//     lg: 1024px,
//     xl: 1366px
//   ) !default;
// $container-max-widths: (
//     sm: 304px,
//     md: 752px,
//     lg: 1008px,
//     xl: 1256px
//   ) !default;

export const Grid = () => `
  @-ms-viewport {
    width: device-width;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .container {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;
    max-width: 1336px;

    @media (min-width: 768px) {
      padding-right: 24px;
      padding-left: 24px;
    }

    @media (min-width: 1024px) {
      padding-right: 40px;
      padding-left: 40px;
    }
  }

  .container-fluid {
    width: 100%;
    padding-right: 12px;
    padding-left: 12px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 768px) {
      padding-right: 24px;
      padding-left: 24px;
    }

    @media (min-width: 1024px) {
      padding-right: 40px;
      padding-left: 40px;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12px;
    margin-left: -12px;

    @media (min-width: 768px) {
      margin-right: -24px;
      margin-left: -24px;
    }

    @media (min-width: 1024px) {
      margin-right: -40px;
      margin-left: -40px;
    }
  }

  .no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  .no-gutters > .col,
  .no-gutters > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }

  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-13, .col-14, .col-15, .col-16, .col,
  .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-13, .col-sm-14, .col-sm-15, .col-sm-16, .col-sm,
  .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-13, .col-md-14, .col-md-15, .col-md-16, .col-md,
  .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-13, .col-lg-14, .col-lg-15, .col-lg-16, .col-lg,
  .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-13, .col-xl-14, .col-xl-15, .col-xl-16, .col-xl,
  .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;

    @media (min-width: 768px) {
      padding-right: 24px;
      padding-left: 24px;
    }

    @media (min-width: 1024px) {
      padding-right: 40px;
      padding-left: 40px;
    }
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }

  .col-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }

  .col-1 {
    flex: 0 0 6.25%;
    max-width: 6.25%;
  }

  .col-2 {
    flex: 0 0 12.5%;
    max-width: 12.5%;
  }

  .col-3 {
    flex: 0 0 18.75%;
    max-width: 18.75%;
  }

  .col-4 {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-5 {
    flex: 0 0 31.25%;
    max-width: 31.25%;
  }

  .col-6 {
    flex: 0 0 37.5%;
    max-width: 37.5%;
  }

  .col-7 {
    flex: 0 0 43.75%;
    max-width: 43.75%;
  }

  .col-8 {
    flex: 0 0 50%;
    max-width: 50%;
  }

  .col-9 {
    flex: 0 0 56.25%;
    max-width: 56.25%;
  }

  .col-10 {
    flex: 0 0 62.5%;
    max-width: 62.5%;
  }

  .col-11 {
    flex: 0 0 68.75%;
    max-width: 68.75%;
  }

  .col-12 {
    flex: 0 0 75%;
    max-width: 75%;
  }

  .col-13 {
    flex: 0 0 81.25%;
    max-width: 81.25%;
  }

  .col-14 {
    flex: 0 0 87.5%;
    max-width: 87.5%;
  }

  .col-15 {
    flex: 0 0 93.75%;
    max-width: 93.75%;
  }

  .col-16 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .order-first {
    order: -1;
  }

  .order-last {
    order: 17;
  }

  .order-0 {
    order: 0;
  }

  .order-1 {
    order: 1;
  }

  .order-2 {
    order: 2;
  }

  .order-3 {
    order: 3;
  }

  .order-4 {
    order: 4;
  }

  .order-5 {
    order: 5;
  }

  .order-6 {
    order: 6;
  }

  .order-7 {
    order: 7;
  }

  .order-8 {
    order: 8;
  }

  .order-9 {
    order: 9;
  }

  .order-10 {
    order: 10;
  }

  .order-11 {
    order: 11;
  }

  .order-12 {
    order: 12;
  }

  .order-13 {
    order: 13;
  }

  .order-14 {
    order: 14;
  }

  .order-15 {
    order: 15;
  }

  .order-16 {
    order: 16;
  }

  .offset-1 {
    margin-left: 6.25%;
  }

  .offset-2 {
    margin-left: 12.5%;
  }

  .offset-3 {
    margin-left: 18.75%;
  }

  .offset-4 {
    margin-left: 25%;
  }

  .offset-5 {
    margin-left: 31.25%;
  }

  .offset-6 {
    margin-left: 37.5%;
  }

  .offset-7 {
    margin-left: 43.75%;
  }

  .offset-8 {
    margin-left: 50%;
  }

  .offset-9 {
    margin-left: 56.25%;
  }

  .offset-10 {
    margin-left: 62.5%;
  }

  .offset-11 {
    margin-left: 68.75%;
  }

  .offset-12 {
    margin-left: 75%;
  }

  .offset-13 {
    margin-left: 81.25%;
  }

  .offset-14 {
    margin-left: 87.5%;
  }

  .offset-15 {
    margin-left: 93.75%;
  }

  @media (min-width: 320px) {
    .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-sm-1 {
      flex: 0 0 6.25%;
      max-width: 6.25%;
    }
    .col-sm-2 {
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .col-sm-3 {
      flex: 0 0 18.75%;
      max-width: 18.75%;
    }
    .col-sm-4 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-sm-5 {
      flex: 0 0 31.25%;
      max-width: 31.25%;
    }
    .col-sm-6 {
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .col-sm-7 {
      flex: 0 0 43.75%;
      max-width: 43.75%;
    }
    .col-sm-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-sm-9 {
      flex: 0 0 56.25%;
      max-width: 56.25%;
    }
    .col-sm-10 {
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .col-sm-11 {
      flex: 0 0 68.75%;
      max-width: 68.75%;
    }
    .col-sm-12 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-sm-13 {
      flex: 0 0 81.25%;
      max-width: 81.25%;
    }
    .col-sm-14 {
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .col-sm-15 {
      flex: 0 0 93.75%;
      max-width: 93.75%;
    }
    .col-sm-16 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-sm-first {
      order: -1;
    }
    .order-sm-last {
      order: 17;
    }
    .order-sm-0 {
      order: 0;
    }
    .order-sm-1 {
      order: 1;
    }
    .order-sm-2 {
      order: 2;
    }
    .order-sm-3 {
      order: 3;
    }
    .order-sm-4 {
      order: 4;
    }
    .order-sm-5 {
      order: 5;
    }
    .order-sm-6 {
      order: 6;
    }
    .order-sm-7 {
      order: 7;
    }
    .order-sm-8 {
      order: 8;
    }
    .order-sm-9 {
      order: 9;
    }
    .order-sm-10 {
      order: 10;
    }
    .order-sm-11 {
      order: 11;
    }
    .order-sm-12 {
      order: 12;
    }
    .order-sm-13 {
      order: 13;
    }
    .order-sm-14 {
      order: 14;
    }
    .order-sm-15 {
      order: 15;
    }
    .order-sm-16 {
      order: 16;
    }
    .offset-sm-0 {
      margin-left: 0;
    }
    .offset-sm-1 {
      margin-left: 6.25%;
    }
    .offset-sm-2 {
      margin-left: 12.5%;
    }
    .offset-sm-3 {
      margin-left: 18.75%;
    }
    .offset-sm-4 {
      margin-left: 25%;
    }
    .offset-sm-5 {
      margin-left: 31.25%;
    }
    .offset-sm-6 {
      margin-left: 37.5%;
    }
    .offset-sm-7 {
      margin-left: 43.75%;
    }
    .offset-sm-8 {
      margin-left: 50%;
    }
    .offset-sm-9 {
      margin-left: 56.25%;
    }
    .offset-sm-10 {
      margin-left: 62.5%;
    }
    .offset-sm-11 {
      margin-left: 68.75%;
    }
    .offset-sm-12 {
      margin-left: 75%;
    }
    .offset-sm-13 {
      margin-left: 81.25%;
    }
    .offset-sm-14 {
      margin-left: 87.5%;
    }
    .offset-sm-15 {
      margin-left: 93.75%;
    }
  }

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 6.25%;
      max-width: 6.25%;
    }
    .col-md-2 {
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .col-md-3 {
      flex: 0 0 18.75%;
      max-width: 18.75%;
    }
    .col-md-4 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-5 {
      flex: 0 0 31.25%;
      max-width: 31.25%;
    }
    .col-md-6 {
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .col-md-7 {
      flex: 0 0 43.75%;
      max-width: 43.75%;
    }
    .col-md-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-9 {
      flex: 0 0 56.25%;
      max-width: 56.25%;
    }
    .col-md-10 {
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .col-md-11 {
      flex: 0 0 68.75%;
      max-width: 68.75%;
    }
    .col-md-12 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-13 {
      flex: 0 0 81.25%;
      max-width: 81.25%;
    }
    .col-md-14 {
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .col-md-15 {
      flex: 0 0 93.75%;
      max-width: 93.75%;
    }
    .col-md-16 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-md-first {
      order: -1;
    }
    .order-md-last {
      order: 17;
    }
    .order-md-0 {
      order: 0;
    }
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
    .order-md-3 {
      order: 3;
    }
    .order-md-4 {
      order: 4;
    }
    .order-md-5 {
      order: 5;
    }
    .order-md-6 {
      order: 6;
    }
    .order-md-7 {
      order: 7;
    }
    .order-md-8 {
      order: 8;
    }
    .order-md-9 {
      order: 9;
    }
    .order-md-10 {
      order: 10;
    }
    .order-md-11 {
      order: 11;
    }
    .order-md-12 {
      order: 12;
    }
    .order-md-13 {
      order: 13;
    }
    .order-md-14 {
      order: 14;
    }
    .order-md-15 {
      order: 15;
    }
    .order-md-16 {
      order: 16;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 6.25%;
    }
    .offset-md-2 {
      margin-left: 12.5%;
    }
    .offset-md-3 {
      margin-left: 18.75%;
    }
    .offset-md-4 {
      margin-left: 25%;
    }
    .offset-md-5 {
      margin-left: 31.25%;
    }
    .offset-md-6 {
      margin-left: 37.5%;
    }
    .offset-md-7 {
      margin-left: 43.75%;
    }
    .offset-md-8 {
      margin-left: 50%;
    }
    .offset-md-9 {
      margin-left: 56.25%;
    }
    .offset-md-10 {
      margin-left: 62.5%;
    }
    .offset-md-11 {
      margin-left: 68.75%;
    }
    .offset-md-12 {
      margin-left: 75%;
    }
    .offset-md-13 {
      margin-left: 81.25%;
    }
    .offset-md-14 {
      margin-left: 87.5%;
    }
    .offset-md-15 {
      margin-left: 93.75%;
    }
  }

  @media (min-width: 1024px) {
    .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-lg-1 {
      flex: 0 0 6.25%;
      max-width: 6.25%;
    }
    .col-lg-2 {
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .col-lg-3 {
      flex: 0 0 18.75%;
      max-width: 18.75%;
    }
    .col-lg-4 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-lg-5 {
      flex: 0 0 31.25%;
      max-width: 31.25%;
    }
    .col-lg-6 {
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .col-lg-7 {
      flex: 0 0 43.75%;
      max-width: 43.75%;
    }
    .col-lg-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-lg-9 {
      flex: 0 0 56.25%;
      max-width: 56.25%;
    }
    .col-lg-10 {
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .col-lg-11 {
      flex: 0 0 68.75%;
      max-width: 68.75%;
    }
    .col-lg-12 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-lg-13 {
      flex: 0 0 81.25%;
      max-width: 81.25%;
    }
    .col-lg-14 {
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .col-lg-15 {
      flex: 0 0 93.75%;
      max-width: 93.75%;
    }
    .col-lg-16 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-lg-first {
      order: -1;
    }
    .order-lg-last {
      order: 17;
    }
    .order-lg-0 {
      order: 0;
    }
    .order-lg-1 {
      order: 1;
    }
    .order-lg-2 {
      order: 2;
    }
    .order-lg-3 {
      order: 3;
    }
    .order-lg-4 {
      order: 4;
    }
    .order-lg-5 {
      order: 5;
    }
    .order-lg-6 {
      order: 6;
    }
    .order-lg-7 {
      order: 7;
    }
    .order-lg-8 {
      order: 8;
    }
    .order-lg-9 {
      order: 9;
    }
    .order-lg-10 {
      order: 10;
    }
    .order-lg-11 {
      order: 11;
    }
    .order-lg-12 {
      order: 12;
    }
    .order-lg-13 {
      order: 13;
    }
    .order-lg-14 {
      order: 14;
    }
    .order-lg-15 {
      order: 15;
    }
    .order-lg-16 {
      order: 16;
    }
    .offset-lg-0 {
      margin-left: 0;
    }
    .offset-lg-1 {
      margin-left: 6.25%;
    }
    .offset-lg-2 {
      margin-left: 12.5%;
    }
    .offset-lg-3 {
      margin-left: 18.75%;
    }
    .offset-lg-4 {
      margin-left: 25%;
    }
    .offset-lg-5 {
      margin-left: 31.25%;
    }
    .offset-lg-6 {
      margin-left: 37.5%;
    }
    .offset-lg-7 {
      margin-left: 43.75%;
    }
    .offset-lg-8 {
      margin-left: 50%;
    }
    .offset-lg-9 {
      margin-left: 56.25%;
    }
    .offset-lg-10 {
      margin-left: 62.5%;
    }
    .offset-lg-11 {
      margin-left: 68.75%;
    }
    .offset-lg-12 {
      margin-left: 75%;
    }
    .offset-lg-13 {
      margin-left: 81.25%;
    }
    .offset-lg-14 {
      margin-left: 87.5%;
    }
    .offset-lg-15 {
      margin-left: 93.75%;
    }
  }

  @media (min-width: 1366px) {
    .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-xl-1 {
      flex: 0 0 6.25%;
      max-width: 6.25%;
    }
    .col-xl-2 {
      flex: 0 0 12.5%;
      max-width: 12.5%;
    }
    .col-xl-3 {
      flex: 0 0 18.75%;
      max-width: 18.75%;
    }
    .col-xl-4 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-5 {
      flex: 0 0 31.25%;
      max-width: 31.25%;
    }
    .col-xl-6 {
      flex: 0 0 37.5%;
      max-width: 37.5%;
    }
    .col-xl-7 {
      flex: 0 0 43.75%;
      max-width: 43.75%;
    }
    .col-xl-8 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-xl-9 {
      flex: 0 0 56.25%;
      max-width: 56.25%;
    }
    .col-xl-10 {
      flex: 0 0 62.5%;
      max-width: 62.5%;
    }
    .col-xl-11 {
      flex: 0 0 68.75%;
      max-width: 68.75%;
    }
    .col-xl-12 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-xl-13 {
      flex: 0 0 81.25%;
      max-width: 81.25%;
    }
    .col-xl-14 {
      flex: 0 0 87.5%;
      max-width: 87.5%;
    }
    .col-xl-15 {
      flex: 0 0 93.75%;
      max-width: 93.75%;
    }
    .col-xl-16 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-xl-first {
      order: -1;
    }
    .order-xl-last {
      order: 17;
    }
    .order-xl-0 {
      order: 0;
    }
    .order-xl-1 {
      order: 1;
    }
    .order-xl-2 {
      order: 2;
    }
    .order-xl-3 {
      order: 3;
    }
    .order-xl-4 {
      order: 4;
    }
    .order-xl-5 {
      order: 5;
    }
    .order-xl-6 {
      order: 6;
    }
    .order-xl-7 {
      order: 7;
    }
    .order-xl-8 {
      order: 8;
    }
    .order-xl-9 {
      order: 9;
    }
    .order-xl-10 {
      order: 10;
    }
    .order-xl-11 {
      order: 11;
    }
    .order-xl-12 {
      order: 12;
    }
    .order-xl-13 {
      order: 13;
    }
    .order-xl-14 {
      order: 14;
    }
    .order-xl-15 {
      order: 15;
    }
    .order-xl-16 {
      order: 16;
    }
    .offset-xl-0 {
      margin-left: 0;
    }
    .offset-xl-1 {
      margin-left: 6.25%;
    }
    .offset-xl-2 {
      margin-left: 12.5%;
    }
    .offset-xl-3 {
      margin-left: 18.75%;
    }
    .offset-xl-4 {
      margin-left: 25%;
    }
    .offset-xl-5 {
      margin-left: 31.25%;
    }
    .offset-xl-6 {
      margin-left: 37.5%;
    }
    .offset-xl-7 {
      margin-left: 43.75%;
    }
    .offset-xl-8 {
      margin-left: 50%;
    }
    .offset-xl-9 {
      margin-left: 56.25%;
    }
    .offset-xl-10 {
      margin-left: 62.5%;
    }
    .offset-xl-11 {
      margin-left: 68.75%;
    }
    .offset-xl-12 {
      margin-left: 75%;
    }
    .offset-xl-13 {
      margin-left: 81.25%;
    }
    .offset-xl-14 {
      margin-left: 87.5%;
    }
    .offset-xl-15 {
      margin-left: 93.75%;
    }
  }

  .d-none {
    display: none !important;
  }

  .d-inline {
    display: inline !important;
  }

  .d-inline-block {
    display: inline-block !important;
  }

  .d-block {
    display: block !important;
  }

  .d-table {
    display: table !important;
  }

  .d-table-row {
    display: table-row !important;
  }

  .d-table-cell {
    display: table-cell !important;
  }

  .d-flex {
    display: flex !important;
  }

  .d-inline-flex {
    display: inline-flex !important;
  }

  @media (min-width: 320px) {
    .d-sm-none {
      display: none !important;
    }
    .d-sm-inline {
      display: inline !important;
    }
    .d-sm-inline-block {
      display: inline-block !important;
    }
    .d-sm-block {
      display: block !important;
    }
    .d-sm-table {
      display: table !important;
    }
    .d-sm-table-row {
      display: table-row !important;
    }
    .d-sm-table-cell {
      display: table-cell !important;
    }
    .d-sm-flex {
      display: flex !important;
    }
    .d-sm-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 768px) {
    .d-md-none {
      display: none !important;
    }
    .d-md-inline {
      display: inline !important;
    }
    .d-md-inline-block {
      display: inline-block !important;
    }
    .d-md-block {
      display: block !important;
    }
    .d-md-table {
      display: table !important;
    }
    .d-md-table-row {
      display: table-row !important;
    }
    .d-md-table-cell {
      display: table-cell !important;
    }
    .d-md-flex {
      display: flex !important;
    }
    .d-md-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 1024px) {
    .d-lg-none {
      display: none !important;
    }
    .d-lg-inline {
      display: inline !important;
    }
    .d-lg-inline-block {
      display: inline-block !important;
    }
    .d-lg-block {
      display: block !important;
    }
    .d-lg-table {
      display: table !important;
    }
    .d-lg-table-row {
      display: table-row !important;
    }
    .d-lg-table-cell {
      display: table-cell !important;
    }
    .d-lg-flex {
      display: flex !important;
    }
    .d-lg-inline-flex {
      display: inline-flex !important;
    }
  }

  @media (min-width: 1366px) {
    .d-xl-none {
      display: none !important;
    }
    .d-xl-inline {
      display: inline !important;
    }
    .d-xl-inline-block {
      display: inline-block !important;
    }
    .d-xl-block {
      display: block !important;
    }
    .d-xl-table {
      display: table !important;
    }
    .d-xl-table-row {
      display: table-row !important;
    }
    .d-xl-table-cell {
      display: table-cell !important;
    }
    .d-xl-flex {
      display: flex !important;
    }
    .d-xl-inline-flex {
      display: inline-flex !important;
    }
  }

  @media print {
    .d-print-none {
      display: none !important;
    }
    .d-print-inline {
      display: inline !important;
    }
    .d-print-inline-block {
      display: inline-block !important;
    }
    .d-print-block {
      display: block !important;
    }
    .d-print-table {
      display: table !important;
    }
    .d-print-table-row {
      display: table-row !important;
    }
    .d-print-table-cell {
      display: table-cell !important;
    }
    .d-print-flex {
      display: flex !important;
    }
    .d-print-inline-flex {
      display: inline-flex !important;
    }
  }

  .flex-row {
    flex-direction: row !important;
  }

  .flex-column {
    flex-direction: column !important;
  }

  .flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .flex-wrap {
    flex-wrap: wrap !important;
  }

  .flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .flex-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .flex-fill {
    flex: 1 1 auto !important;
  }

  .flex-grow-0 {
    flex-grow: 0 !important;
  }

  .flex-grow-1 {
    flex-grow: 1 !important;
  }

  .flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .justify-content-start {
    justify-content: flex-start !important;
  }

  .justify-content-end {
    justify-content: flex-end !important;
  }

  .justify-content-center {
    justify-content: center !important;
  }

  .justify-content-between {
    justify-content: space-between !important;
  }

  .justify-content-around {
    justify-content: space-around !important;
  }

  .align-items-start {
    align-items: flex-start !important;
  }

  .align-items-end {
    align-items: flex-end !important;
  }

  .align-items-center {
    align-items: center !important;
  }

  .align-items-baseline {
    align-items: baseline !important;
  }

  .align-items-stretch {
    align-items: stretch !important;
  }

  .align-content-start {
    align-content: flex-start !important;
  }

  .align-content-end {
    align-content: flex-end !important;
  }

  .align-content-center {
    align-content: center !important;
  }

  .align-content-between {
    align-content: space-between !important;
  }

  .align-content-around {
    align-content: space-around !important;
  }

  .align-content-stretch {
    align-content: stretch !important;
  }

  .align-self-auto {
    align-self: auto !important;
  }

  .align-self-start {
    align-self: flex-start !important;
  }

  .align-self-end {
    align-self: flex-end !important;
  }

  .align-self-center {
    align-self: center !important;
  }

  .align-self-baseline {
    align-self: baseline !important;
  }

  .align-self-stretch {
    align-self: stretch !important;
  }

  @media (min-width: 320px) {
    .flex-sm-row {
      flex-direction: row !important;
    }
    .flex-sm-column {
      flex-direction: column !important;
    }
    .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-sm-wrap {
      flex-wrap: wrap !important;
    }
    .flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-sm-fill {
      flex: 1 1 auto !important;
    }
    .flex-sm-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-sm-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-sm-start {
      justify-content: flex-start !important;
    }
    .justify-content-sm-end {
      justify-content: flex-end !important;
    }
    .justify-content-sm-center {
      justify-content: center !important;
    }
    .justify-content-sm-between {
      justify-content: space-between !important;
    }
    .justify-content-sm-around {
      justify-content: space-around !important;
    }
    .align-items-sm-start {
      align-items: flex-start !important;
    }
    .align-items-sm-end {
      align-items: flex-end !important;
    }
    .align-items-sm-center {
      align-items: center !important;
    }
    .align-items-sm-baseline {
      align-items: baseline !important;
    }
    .align-items-sm-stretch {
      align-items: stretch !important;
    }
    .align-content-sm-start {
      align-content: flex-start !important;
    }
    .align-content-sm-end {
      align-content: flex-end !important;
    }
    .align-content-sm-center {
      align-content: center !important;
    }
    .align-content-sm-between {
      align-content: space-between !important;
    }
    .align-content-sm-around {
      align-content: space-around !important;
    }
    .align-content-sm-stretch {
      align-content: stretch !important;
    }
    .align-self-sm-auto {
      align-self: auto !important;
    }
    .align-self-sm-start {
      align-self: flex-start !important;
    }
    .align-self-sm-end {
      align-self: flex-end !important;
    }
    .align-self-sm-center {
      align-self: center !important;
    }
    .align-self-sm-baseline {
      align-self: baseline !important;
    }
    .align-self-sm-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 768px) {
    .flex-md-row {
      flex-direction: row !important;
    }
    .flex-md-column {
      flex-direction: column !important;
    }
    .flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-md-wrap {
      flex-wrap: wrap !important;
    }
    .flex-md-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-md-fill {
      flex: 1 1 auto !important;
    }
    .flex-md-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-md-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-md-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-md-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-md-start {
      justify-content: flex-start !important;
    }
    .justify-content-md-end {
      justify-content: flex-end !important;
    }
    .justify-content-md-center {
      justify-content: center !important;
    }
    .justify-content-md-between {
      justify-content: space-between !important;
    }
    .justify-content-md-around {
      justify-content: space-around !important;
    }
    .align-items-md-start {
      align-items: flex-start !important;
    }
    .align-items-md-end {
      align-items: flex-end !important;
    }
    .align-items-md-center {
      align-items: center !important;
    }
    .align-items-md-baseline {
      align-items: baseline !important;
    }
    .align-items-md-stretch {
      align-items: stretch !important;
    }
    .align-content-md-start {
      align-content: flex-start !important;
    }
    .align-content-md-end {
      align-content: flex-end !important;
    }
    .align-content-md-center {
      align-content: center !important;
    }
    .align-content-md-between {
      align-content: space-between !important;
    }
    .align-content-md-around {
      align-content: space-around !important;
    }
    .align-content-md-stretch {
      align-content: stretch !important;
    }
    .align-self-md-auto {
      align-self: auto !important;
    }
    .align-self-md-start {
      align-self: flex-start !important;
    }
    .align-self-md-end {
      align-self: flex-end !important;
    }
    .align-self-md-center {
      align-self: center !important;
    }
    .align-self-md-baseline {
      align-self: baseline !important;
    }
    .align-self-md-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1024px) {
    .flex-lg-row {
      flex-direction: row !important;
    }
    .flex-lg-column {
      flex-direction: column !important;
    }
    .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-lg-wrap {
      flex-wrap: wrap !important;
    }
    .flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-lg-fill {
      flex: 1 1 auto !important;
    }
    .flex-lg-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-lg-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-lg-start {
      justify-content: flex-start !important;
    }
    .justify-content-lg-end {
      justify-content: flex-end !important;
    }
    .justify-content-lg-center {
      justify-content: center !important;
    }
    .justify-content-lg-between {
      justify-content: space-between !important;
    }
    .justify-content-lg-around {
      justify-content: space-around !important;
    }
    .align-items-lg-start {
      align-items: flex-start !important;
    }
    .align-items-lg-end {
      align-items: flex-end !important;
    }
    .align-items-lg-center {
      align-items: center !important;
    }
    .align-items-lg-baseline {
      align-items: baseline !important;
    }
    .align-items-lg-stretch {
      align-items: stretch !important;
    }
    .align-content-lg-start {
      align-content: flex-start !important;
    }
    .align-content-lg-end {
      align-content: flex-end !important;
    }
    .align-content-lg-center {
      align-content: center !important;
    }
    .align-content-lg-between {
      align-content: space-between !important;
    }
    .align-content-lg-around {
      align-content: space-around !important;
    }
    .align-content-lg-stretch {
      align-content: stretch !important;
    }
    .align-self-lg-auto {
      align-self: auto !important;
    }
    .align-self-lg-start {
      align-self: flex-start !important;
    }
    .align-self-lg-end {
      align-self: flex-end !important;
    }
    .align-self-lg-center {
      align-self: center !important;
    }
    .align-self-lg-baseline {
      align-self: baseline !important;
    }
    .align-self-lg-stretch {
      align-self: stretch !important;
    }
  }

  @media (min-width: 1366px) {
    .flex-xl-row {
      flex-direction: row !important;
    }
    .flex-xl-column {
      flex-direction: column !important;
    }
    .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }
    .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }
    .flex-xl-wrap {
      flex-wrap: wrap !important;
    }
    .flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }
    .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }
    .flex-xl-fill {
      flex: 1 1 auto !important;
    }
    .flex-xl-grow-0 {
      flex-grow: 0 !important;
    }
    .flex-xl-grow-1 {
      flex-grow: 1 !important;
    }
    .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
    }
    .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
    }
    .justify-content-xl-start {
      justify-content: flex-start !important;
    }
    .justify-content-xl-end {
      justify-content: flex-end !important;
    }
    .justify-content-xl-center {
      justify-content: center !important;
    }
    .justify-content-xl-between {
      justify-content: space-between !important;
    }
    .justify-content-xl-around {
      justify-content: space-around !important;
    }
    .align-items-xl-start {
      align-items: flex-start !important;
    }
    .align-items-xl-end {
      align-items: flex-end !important;
    }
    .align-items-xl-center {
      align-items: center !important;
    }
    .align-items-xl-baseline {
      align-items: baseline !important;
    }
    .align-items-xl-stretch {
      align-items: stretch !important;
    }
    .align-content-xl-start {
      align-content: flex-start !important;
    }
    .align-content-xl-end {
      align-content: flex-end !important;
    }
    .align-content-xl-center {
      align-content: center !important;
    }
    .align-content-xl-between {
      align-content: space-between !important;
    }
    .align-content-xl-around {
      align-content: space-around !important;
    }
    .align-content-xl-stretch {
      align-content: stretch !important;
    }
    .align-self-xl-auto {
      align-self: auto !important;
    }
    .align-self-xl-start {
      align-self: flex-start !important;
    }
    .align-self-xl-end {
      align-self: flex-end !important;
    }
    .align-self-xl-center {
      align-self: center !important;
    }
    .align-self-xl-baseline {
      align-self: baseline !important;
    }
    .align-self-xl-stretch {
      align-self: stretch !important;
    }
  }
`;

export default Grid;
