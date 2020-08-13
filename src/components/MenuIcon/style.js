import { css, keyframes } from '@emotion/core';

const animationMenuEnter = keyframes`
  from { opacity: 0; transform: translateX(100px) }
  to { opacity: 1; transform: translateX(0px) }
`;

export const menuItemEnter = index => css`
  @media (min-width: 1024px) {
    animation: ${animationMenuEnter} 0.3s ease ${index / 5}s both;
  }
`;

export const menuIconCss = menuIsOpen => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  cursor: pointer;
  margin-bottom: 4px;
  position: relative;
  z-index: 99999;

  .icon-menu {
    width: 40px;
    height: 2px;
    background: #000;
    transform: ${menuIsOpen ? 'rotate(45deg)' : 'none'};
    transition: all 0.3s;
    position: relative;

    &:before {
      content: ' ';
      position: absolute;
      top: ${menuIsOpen ? '0px' : '8px'};
      width: 40px;
      height: 2px;
      background: #000;
      transform: ${menuIsOpen ? 'rotate(-90deg)' : 'none'};
      transition: all 0.3s;
    }
  }

  .icon-back {
    width: 40px;
    height: 2px;
    background: #000;
    transition: all 0.3s;
    position: relative;

    &:before {
      content: ' ';
      position: absolute;
      top: -4px;
      left: -1px;
      width: 14px;
      height: 2px;
      background: #000;
      transform: rotate(-35deg);
      transition: all 0.3s;
    }

    &:after {
      content: ' ';
      position: absolute;
      top: -1px;
      left: -1px;
      width: 1px;
      height: 3px;
      background: #fff;
    }
  }
`;

export default menuIconCss;
