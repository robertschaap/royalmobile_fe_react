import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Banner from './Banner';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>
        {children}
        <Banner />
      </Main>
      <Footer />
    </>
  );
};

export default RootLayout;
