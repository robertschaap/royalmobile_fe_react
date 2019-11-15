import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import Banner from '../components/Banner';
import RootLayout from '../components/RootLayout';

const Root: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootLayout>
        <Banner />
      </RootLayout>
    </ThemeProvider>
  );
};

export default Root;
