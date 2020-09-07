import { css, keyframes } from '@emotion/core';

const animationBackgroundEnter = keyframes`
  from { color: #f5f5f5 }
  to { color: #000 }
`;

const animationBackgroundLeave = keyframes`
  from { color: #000 }
  to { color: #f5f5f5 }
`;

const animationMenuEnter = keyframes`
  from { opacity: 0; transform: translateX(100px) }
  to { opacity: 1; transform: translateX(0px) }
`;

const animationMenuLeave = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const animationMenuLineEnter = keyframes`
  from { border-color: #797885 }
  to { border-color: #000 }
`;

const animationMenuLineLeave = keyframes`
  from { border-color: #000 }
  to { border-color: #797885 }
`;

export const backgroundEnter = css`
  @media (min-width: 1024px) {
    animation: ${animationBackgroundEnter} 1s ease 0.2s both;
  }
`;

export const backgroundLeave = css`
  @media (min-width: 1024px) {
    animation: ${animationBackgroundLeave} 1s ease 0.2s both;
  }
`;

export const menuItemEnter = index => css`
  @media (min-width: 1024px) {
    animation: ${animationMenuEnter} 0.3s ease ${(index + 1) / 5}s both;
  }
`;

export const menuItemLeave = css`
  @media (min-width: 1024px) {
    animation: ${animationMenuLeave} 0.3s ease both;
  }
`;

export const menuLineEnter = css`
  @media (min-width: 1024px) {
    animation: ${animationMenuLineEnter} 0.3s ease both;
  }
`;

export const menuLineLeave = index => css`
  @media (min-width: 1024px) {
    animation: ${animationMenuLineLeave} 0.3s ease ${(index + 1) / 5}s both;
  }
`;

export const home = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 4px 0;
  overflow: hidden;

  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 128px 0 0;
  }

  .background {
    user-select: none;
    position: fixed;
    right: 36px;
    top: -40vh;
    transform: rotate(-90deg);
    transform-origin: bottom right;
    font-size: 21vh;
    font-weight: bold;
    color: #000;
    z-index: -1;
    line-height: 1;
    color: #f5f5f5;

    @media (min-width: 1024px) {
      right: 200px;
      font-size: 32vh;
      top: -80vh;
    }

    @media (min-width: 1366px) {
      right: 250px;
      font-size: 22vh;
      top: -44vh;
    }
  }

  .header {
    display: flex;
    margin-right: 8px;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
      margin: 0 50px 0 128px;
    }

    .heading-wrapper {
      order: 1;
      display: flex;
      align-items: center;

      hr {
        display: none;
        background: transparent;
        border: 1px solid #000;
        width: 64px;
        margin-right: 24px;

        @media (min-width: 1024px) {
          display: block;
        }
      }

      .heading {
        @media (min-height: 700px) and (max-width: 1023px) {
          margin-top: 25%;
        }

        h1,
        h2 {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          margin: 0;
          padding: 0;
          text-align: right;

          @media (min-width: 1024px) {
            font-size: 24px;
            max-width: 100%;
            text-align: left;
          }
        }
      }
    }

    .links {
      order: 0;
      display: flex;
      margin: 0 0 4px;
      padding: 0;

      @media (min-width: 1024px) {
        order: 2;
        margin: 0;
      }

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        list-style: none;
        font-size: 14px;

        a {
          color: #000;
          text-decoration: none;
        }

        @media (min-width: 1024px) {
          font-size: 24px;
        }
      }
    }
  }

  .menu {
    flex: 1;
    display: flex;
    padding: 8px 0;

    @media (min-width: 1024px) {
      padding: 128px 0;
    }

    &-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      transition: all 0.3s;
      margin: 0;

      @media (min-width: 1024px) {
        justify-content: flex-end;
      }

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

          @media (min-width: 1920px) {
            padding: 24px 0;
          }
        }

        &--title {
          font-size: 64px;
          font-weight: bold;
          color: #000;
          line-height: 1;
          margin-right: 8px;

          @media (min-width: 1024px) {
            opacity: 0;
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
          width: 30vw;

          @media (min-width: 1024px) {
            display: block;
          }

          @media (min-width: 1280px) {
            width: 40vw;
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
          .menu-list--item--title {
            color: #000;
          }

          hr {
            margin-left: 32px;
            width: 38vw;

            @media (min-width: 1280px) {
              width: 48vw;
            }
          }
        }
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 24px 8px 50% 0;
    font-family: 'Playfair Display', serif;

    @media (min-height: 700px) {
      margin-bottom: 60%;
    }

    @media (min-height: 900px) {
      margin-bottom: 30%;
    }

    @media (min-width: 1024px) {
      position: absolute;
      bottom: 40px;
      left: 40px;
      margin-bottom: 0;
      font-size: 24px;

      hr {
        display: none;
      }
    }

    a {
      color: #000;
      text-decoration: none;
    }

    hr {
      border: 1px solid #979797;
      width: 64px;
      margin: 0 32px 0 0;
    }
  }
`;

export default home;
