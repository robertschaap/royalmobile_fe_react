import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render as renderTest } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

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

export const renderWithProviders = (Component: React.ReactElement, customInitialState?: Record<string, unknown>) => {
  return renderTest(
    <Provider store={createStore(customInitialState)}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {Component}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};
