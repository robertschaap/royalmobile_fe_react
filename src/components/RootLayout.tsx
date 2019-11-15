import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const RootLayoutBase = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 ${({ theme }) => theme.spacing(4)};

  @media ${breakpoint_up.md} {
    padding: 0 ${({ theme }) => theme.spacing(8)};
  }
`;

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <RootLayoutBase>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </RootLayoutBase>
  );
};

export default RootLayout;
