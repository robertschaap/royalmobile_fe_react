import React from 'react';

import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import ProductListingContainer from '../containers/ProductListingContainer';

const HomePage: React.FC = () => {
  return (
    <>
      <Banner />
      <ProductListingContainer />
      <Benefits />
    </>
  );
};

export default HomePage;
