import React from 'react';
import styled from 'styled-components';
import { media_breakpoint_up } from '../styles/theme';
import routes from '../constants/routes';

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

  ${media_breakpoint_up.lg} {
    padding: 0 ${({ theme }) => theme.spacing(0)};
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
        <div style={{ backgroundColor: '#ddd' }}>
          Debug:&nbsp;
          <a href={routes.HOME_PAGE}>Home</a> |&nbsp;
          <a href={routes.PRODUCT_PAGE}>Product</a> |&nbsp;
          <a href={routes.ORDER_PAGE}>Order</a> |&nbsp;
          <a href={routes.ORDER_DETAILS_PAGE}>Order Details</a>
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
