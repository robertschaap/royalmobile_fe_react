import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import Banner from '../../components/Banner';
import Benefits from './Benefits';
import PageTitle from '../../components/PageTitle';
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
