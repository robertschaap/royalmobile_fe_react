import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer, initialState } from '../reducers';
import rootSaga from '../sagas';
import routes from '../constants/routes';

import CampaignsPageContainer from './CampaignsPageContainer';
import ContactPageContainer from './ContactPageContainer';
import HelpPageContainer from './HelpPageContainer';
import HomePageContainer from './HomePageContainer';
import OrderPageContainer from './OrderPageContainer';
import ProductPageContainer from './ProductPageContainer';
import RootLayout from '../components/RootLayout';
import ThemeProviderContainer from './ThemeProviderContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    ...((window as any).__REDUX_DEVTOOLS_EXTENSION__ ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()] : []),
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

            <Route path={routes.CAMPAIGNS_PAGE} component={CampaignsPageContainer} />
            <Route path={routes.CONTACT_PAGE} component={ContactPageContainer} />
            <Route path={routes.HELP_PAGE} component={HelpPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProviderContainer>
    </Provider>
  );
};

export default Root;
