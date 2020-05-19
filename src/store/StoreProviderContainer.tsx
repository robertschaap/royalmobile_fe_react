import React from 'react';
import { Provider } from 'react-redux';
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from './reducers';
import rootSaga from './sagas';

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createReduxStore(
    rootReducer(),
    undefined,
    compose(
      applyMiddleware(sagaMiddleware),
      // eslint-disable-next-line no-underscore-dangle
      ...((window as any).__REDUX_DEVTOOLS_EXTENSION__ ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()] : []),
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
