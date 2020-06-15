import React from 'react';
import { useContentCopy } from '../../utils/useContentCopy';

import Banner from '../../components/Banner';
import Benefits from './Benefits';
import PageTitle from '../../components/PageTitle';
import ProductListingContainer from './ProductListingContainer';

const HomePageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.home')} />
      <Banner />
      <ProductListingContainer />
      <Benefits />
    </>
  );
};

export default HomePageContainer;
