import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global.styles';
import theme from '../styles/theme';

interface ThemeProviderContainerProps {
  children: React.ReactNode;
}

const ThemeProviderContainer: React.FC<ThemeProviderContainerProps> = (props) => {
  const { children } = props;

  return (
    <>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default ThemeProviderContainer;
