import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers';
import routes from '../constants/routes';

import RootLayout from '../components/RootLayout';
import HomePageContainer from './HomePageContainer';
import OrderPageContainer from './OrderPageContainer';
import ProductPageContainer from './ProductPageContainer';
import ThemeProviderContainer from './ThemeProviderContainer';

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProviderContainer>
        <BrowserRouter>
          <RootLayout>
            <Route exact path={routes.HOME} component={HomePageContainer} />
            <Route path={routes.PRODUCT} component={ProductPageContainer} />
            <Route path={routes.ORDER} component={OrderPageContainer} />
          </RootLayout>
        </BrowserRouter>
      </ThemeProviderContainer>
    </Provider>
  );
};

export default Root;
