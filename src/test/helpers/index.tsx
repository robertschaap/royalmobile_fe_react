import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as renderTest } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import theme from '../../styles/theme';
import { createStore } from '../../store';

export const render = renderTest;

export const renderWithTheme = (Component: React.ReactElement) => {
  return renderTest(
    <ThemeProvider theme={theme}>
      {Component}
    </ThemeProvider>,
  );
};

const mockStore = configureStore([]);

export const renderWithProviders = (Component: React.ReactElement, customInitialState?: Record<string, unknown>) => {
  // Mock the store only when we pass a customInitialState so we can test reducers without loading
  // the whole store. Otherwise load the proper store with reducers and sagas for integration
  const store = customInitialState ? mockStore(customInitialState) : createStore();

  return renderTest(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {Component}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};
