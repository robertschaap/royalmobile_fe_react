import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import theme from '../../styles/theme';
import { initialState } from '../../reducers';

export const renderWithTheme = (Component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {Component}
    </ThemeProvider>,
  );
};

const mockStore = configureStore([]);

export const renderWithProviders = (Component: React.ReactElement, customInitialState?: Object) => {
  const store = mockStore(customInitialState || initialState);

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {Component}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};
