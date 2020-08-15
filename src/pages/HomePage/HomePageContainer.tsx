import React from 'react';

import Banner from '../../components/Banner';
import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

import Benefits from './Benefits';
import ProductListingContainer from './ProductListingContainer';

const HomePageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.home')} />
      <Banner />
      <ProductListingContainer />
      <Benefits />
    </>
  );
};

export default HomePageContainer;
