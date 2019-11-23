import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from '../reducers';
import rootSaga from '../sagas';
import routes from '../constants/routes';

import RootLayout from '../components/RootLayout';
import HomePageContainer from './HomePageContainer';
import OrderPageContainer from './OrderPageContainer';
import ProductPageContainer from './ProductPageContainer';
import ThemeProviderContainer from './ThemeProviderContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(rootSaga);

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProviderContainer>
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME_PAGE} component={HomePageContainer} />
            <Route path={routes.PRODUCT_PAGE} component={ProductPageContainer} />
            <Route path={routes.ORDER_PAGE} component={OrderPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProviderContainer>
    </Provider>
  );
};

export default Root;
