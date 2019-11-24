import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';

export const renderWithTheme = (Component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {Component}
    </ThemeProvider>
  );
};

export const renderWithProviders = (Component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {Component}
      </BrowserRouter>
    </ThemeProvider>
  );
};
