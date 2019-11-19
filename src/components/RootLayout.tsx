import React from 'react';
import styled from 'styled-components';
import { breakpoint_up } from '../styles/theme';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const RootLayoutBase = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
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
      {true && (
        <div style={{ backgroundColor: "#ddd" }}>
          Debug:&nbsp;
          <a href="/">Home</a> |&nbsp;
          <a href="/product">Product</a> |&nbsp;
          <a href="/order">Order</a>
        </div>
      )}
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </RootLayoutBase>
  );
};

export default RootLayout;
