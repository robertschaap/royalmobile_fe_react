import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

import Banner from '../components/Banner';
import RootLayout from '../components/RootLayout';

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

const Root: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RootLayout>
          <Banner />
        </RootLayout>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Root;
