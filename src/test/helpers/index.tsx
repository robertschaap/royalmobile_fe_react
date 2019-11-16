import React from 'react';
import ReactDOM from 'react-dom';
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
