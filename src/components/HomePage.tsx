import React from 'react';

import Banner from './Banner';
import Benefits from './Benefits';
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
