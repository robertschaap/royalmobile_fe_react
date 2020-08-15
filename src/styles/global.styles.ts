import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  a:focus,
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.color.blue};
  }

  a:hover,
  button:hover {
    box-shadow: 0 0 0 3px ${theme.color.lightGrey};
  }
`;
