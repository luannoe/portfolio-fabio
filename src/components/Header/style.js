import { css, keyframes } from '@emotion/core';

const scrollEnter = keyframes`
  from {
    background: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
  }
  to {
    background: #f5f5f5;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, .5);
  }
`;

const scrollLeaveMobile = keyframes`
  from {
    background: #f5f5f5;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, .5);
  }
  to {
    background: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
  }
`;

const scrollEnterMobile = keyframes`
  from {
    background: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
  }
  to {
    background: #f5f5f5;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, .5);
  }
`;

const scrollLeave = keyframes`
  from {
    background: #f5f5f5;
    box-shadow: 0 8px 18px 0 rgba(0, 0, 0, .5);
  }
  to {
    background: #fff;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .5);
  }
`;

const fontSizeEnter = keyframes`
  from {
    font-size: 144px;
  }
  to {
    font-size: 64px;
  }
`;

const fontSizeLeave = keyframes`
  from {
    font-size: 64px;
  }
  to {
    font-size: 144px;
  }
`;

const animationMenuEnter = keyframes`
  from { opacity: 0; transform: translateX(100px) }
  to { opacity: 1; transform: translateX(0px) }
`;

export const menuItemEnter = index => css`
  @media (min-width: 1024px) {
    animation: ${animationMenuEnter} 0.3s ease ${index / 5}s both;
  }
`;

export const header = top => css`
  position: fixed;
  background: transparent;
  padding-bottom: 16px;
  z-index: 999;

  @media (min-width: 1024px) {
    padding-top: 32px;

    .container-fluid {
      margin-left: 5%;
      margin-right: 5%;
    }
  }

  @media (min-width: 1366px) {
    .container-fluid {
      margin-left: 10%;
      margin-right: 10%;
    }
  }

  &.scroll {
    animation: ${top === 0 ? scrollLeaveMobile : scrollEnterMobile} 0.1s ease
      both;

    @media (min-width: 1024px) {
      animation: ${top < 50 ? scrollLeave : scrollEnter} 0.1s ease both;
    }
  }

  h1 {
    font-size: 64px;
    margin: 0;
    padding: 0;

    @media (min-width: 1024px) {
      animation: ${top < 50 ? fontSizeLeave : fontSizeEnter} 0.3s ease both;
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(5px);
    z-index: 9999;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .nav-menu {
      padding: 8px 0;

      @media (min-width: 1024px) {
        padding: 128px 0;
      }

      &-list {
        display: flex;
        flex-direction: column;
        transition: all 0.3s;
        margin: 0;

        &--item {
          display: flex;
          align-self: flex-end;
          align-items: flex-end;

          &--link {
            display: flex;
            align-items: flex-end;
            padding: 12px 0;
            text-decoration: none;

            @media (min-width: 1024px) {
              padding: 16px 0;
            }
          }

          &--title {
            font-size: 64px;
            font-weight: bold;
            color: #000;
            line-height: 1;
            margin-right: 8px;

            @media (min-width: 1024px) {
              font-size: 72px;
              color: #797885;
              margin-right: 0;
              transition: all 0.3s;
            }
          }

          hr {
            display: none;
            background: transparent;
            border: 1px solid #000;
            margin: 0 16px 10px;
            transition: all 0.3s;
            width: 220px;

            @media (min-width: 1024px) {
              display: block;
            }
          }

          &--index {
            display: none;
            font-family: 'Playfair Display', serif;
            width: 64px;
            height: 32px;
            font-size: 24px;
            margin-bottom: 10px;
            color: #000;

            @media (min-width: 1024px) {
              display: block;
            }
          }

          &:hover {
            .nav-menu-list--item--title {
              color: #000;
            }

            hr {
              margin-left: 32px;
              width: 350px;
            }
          }
        }
      }
    }
  }
`;

export default header;
