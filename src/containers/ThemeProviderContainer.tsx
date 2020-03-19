import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Raleway', sans-serif;
  }

  a:focus,
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px royalblue;
  }
`;

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
