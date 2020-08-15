import React from 'react';

import DebugMenu from '../DebugMenu';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';

import * as S from './root-layout.styles';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <S.RootLayoutBase>
      <DebugMenu />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </S.RootLayoutBase>
  );
};

export default RootLayout;
