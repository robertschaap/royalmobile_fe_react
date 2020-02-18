import React from 'react';

import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import PageTitle from '../components/PageTitle';
import ProductListingContainer from './ProductListingContainer';

const HomePageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Home" />
      <Banner />
      <ProductListingContainer />
      <Benefits />
    </>
  );
};

export default HomePageContainer;
