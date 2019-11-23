import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, fetchProductsCollection } from '../ducks/products';

import Button from '../components/Button';
import ProductListing from '../components/ProductListing';

const ProductListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProductsCollection());
  }, []);

  return (
    <>
      <ProductListing
        products={productsState.collection} />
      <Button
        variant="secondary">
        Load More
      </Button>
    </>
  );

};

export default ProductListingContainer;
