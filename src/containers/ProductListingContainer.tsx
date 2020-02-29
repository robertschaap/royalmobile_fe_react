import React, { useEffect, useCallback } from 'react';
import { fetchProducts, selectProducts, useDispatch, useSelector } from '../store';

import Button from '../components/Button';
import ContentCopy from '../components/ContentCopy';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import PageSection from '../components/PageSection';
import ProductListing from '../components/ProductListing';

const ProductListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleLoadMoreClick = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
      <Loader show={productsState.isFetching} />
      <Button
        variant="secondary"
        disabled={productsState.isFetching}
        onClick={handleLoadMoreClick}>
        <ContentCopy messageId="common.loadMore" />
      </Button>
    </PageSection>
  );
};

export default ProductListingContainer;
