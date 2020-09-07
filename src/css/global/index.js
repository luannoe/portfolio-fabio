import { css } from '@emotion/core';
import Normalize from './normalize';
import GridSystem from './gridSystem';
import Font from './font';

export const GlobalCss = (theme = {}) => css`
  ${Normalize(theme)}
  ${GridSystem(theme)}
  ${Font(theme)}

  button {
    cursor: pointer;
  }
`;

export default GlobalCss;
