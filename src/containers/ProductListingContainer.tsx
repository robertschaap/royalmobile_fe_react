import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, fetchProductsCollection } from '../ducks/products';

import Button from '../components/Button';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import PageSection from '../components/PageSection';
import ProductListing from '../components/ProductListing';

const ProductListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProductsCollection());
  }, [dispatch]);

  if (productsState.isFetching) {
    return <Loader />;
  }

  if (productsState.hasError) {
    return (
      <PageSection>
        <ErrorMessage messageId="common.errorMissing" />
      </PageSection>
    );
  }

  return (
    <PageSection>
      <ProductListing
        products={productsState.collection} />
      <Button
        variant="secondary">
        Load More
      </Button>
    </PageSection>
  );

};

export default ProductListingContainer;
