import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from './reducers';
import rootSaga from './sagas';

/**
 * `createStore` provisions the store, sets up reducers and applies saga
 * middleware and Redux devtools. This is exported only to enable
 * store provision for testing purposes It should not be used
 * anywhere else outside of `src/store` since the
 * `StoreProviderContainer` implements it.
 */
export const createStore = (customInitialState?: Record<string, unknown>) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(
    rootReducer(),
    customInitialState,
    compose(
      applyMiddleware(sagaMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : []),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

interface StoreProviderContainerProps {
  children: React.ReactNode;
}

export const StoreProviderContainer: React.FC<StoreProviderContainerProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={createStore()}>
      {children}
    </Provider>
  );
};
