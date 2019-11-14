import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import RootLayout from '../components/RootLayout';

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout>
        Page Content Here
      </RootLayout>
    </ThemeProvider>
  );
};

export default Root;
