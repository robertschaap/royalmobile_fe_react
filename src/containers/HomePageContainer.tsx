import React from 'react';
import { useSelector } from 'react-redux';

import { getProductsCollection } from '../ducks/products';
import PageTitle from '../components/PageTitle';
import HomePage from '../components/HomePage';

const HomePageContainer: React.FC = () => {
  const products = useSelector(getProductsCollection);

  return (
    <>
      <PageTitle page="Home" />
      <HomePage products={products} />
    </>
  );
};

export default HomePageContainer;
