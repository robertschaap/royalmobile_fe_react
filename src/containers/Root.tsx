import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers';
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

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME} component={HomePageContainer} />
            <Route path={routes.PRODUCT} component={ProductPageContainer} />
            <Route path={routes.ORDER} component={OrderPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </Provider>
  );
};

export default Root;
