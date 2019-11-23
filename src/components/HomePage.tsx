import React from 'react';
import styled from 'styled-components';

import { Product } from '../types/products';
import Banner from '../components/Banner';
import Benefits from '../components/Benefits';
import Button from '../components/Button';
import ProductListing from '../components/ProductListing';

const LoadMoreButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

interface HomePageProps {
  products: Product[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { products } = props;

  return (
    <>
      <Banner />
      <ProductListing
        products={products} />
      <LoadMoreButton
        variant="secondary">
        Load More
      </LoadMoreButton>
      <Benefits />
    </>
  );
};

export default HomePage;
