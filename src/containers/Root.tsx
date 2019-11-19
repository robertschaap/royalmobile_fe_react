import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import routes from '../constants/routes';
import theme from '../styles/theme';

import RootLayout from '../components/RootLayout';
import HomePageContainer from '../containers/HomePageContainer';
import OrderPageContainer from './OrderPageContainer';
import ProductPageContainer from './ProductPageContainer';

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

  a:focus,
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px royalblue;
  }
`;

const Root: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME} component={HomePageContainer} />
            <Route path={"/product"} component={ProductPageContainer} />
            <Route path={"/order"} component={OrderPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default Root;
