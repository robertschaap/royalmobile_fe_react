import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, fetchProducts } from '../ducks/products';

import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import PageSection from '../components/PageSection';
import ProductListing from '../components/ProductListing';

const ProductListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    dispatch(fetchProducts());
  };

  if (productsState.hasError) {
    return (
      <ErrorMessage messageId="common.errorMissing" />
    );
  }

  return (
    <PageSection>
      <ProductListing
        products={productsState.collection} />
      <Loader show={productsState.isFetching} />
      <Button
        variant="secondary"
        disabled={productsState.isFetching}
        onClick={handleLoadMoreClick}>
        Load More
      </Button>
    </PageSection>
  );

};

export default ProductListingContainer;
