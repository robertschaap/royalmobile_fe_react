import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Root from './containers/Root';

const GlobalStyle = createGlobalStyle`
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
`;

const App: React.FC = () => {
  return (
    <>
      <Root />
      <GlobalStyle />
    </>
  );
}

export default App;
