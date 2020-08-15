import { render as renderTest } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { createStore } from '../../store';
import theme from '../../styles/theme';

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
