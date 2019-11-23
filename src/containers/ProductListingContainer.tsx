import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getProductsCollection } from '../ducks/products';

import { Product } from '../types/products';
import Button from '../components/Button';
import ProductListing from '../components/ProductListing';

const LoadMoreButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`

interface ProductListingContainerProps {}


const ProductListingContainer: React.FC<ProductListingContainerProps> = (props) => {
  const products = useSelector(getProductsCollection);

  return (
    <>
      <ProductListing
        products={products} />
      <LoadMoreButton
        variant="secondary">
        Load More
      </LoadMoreButton>
    </>
  );
};

export default ProductListingContainer;
