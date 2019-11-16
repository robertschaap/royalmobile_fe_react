import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../constants/routes';
import theme from '../styles/theme';

import RootLayout from '../components/RootLayout';
import HomePageContainer from '../containers/HomePageContainer';

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
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME} component={HomePageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Root;
