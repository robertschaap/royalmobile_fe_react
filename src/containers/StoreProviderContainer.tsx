import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer, initialState } from '../store/reducers';
import rootSaga from '../store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer(),
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    // eslint-disable-next-line no-underscore-dangle
    ...((window as any).__REDUX_DEVTOOLS_EXTENSION__ ? [(window as any).__REDUX_DEVTOOLS_EXTENSION__()] : []),
  ),
);

sagaMiddleware.run(rootSaga);

interface StoreProviderContainerProps {
  children: React.ReactNode;
}

const StoreProviderContainer: React.FC<StoreProviderContainerProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProviderContainer;
