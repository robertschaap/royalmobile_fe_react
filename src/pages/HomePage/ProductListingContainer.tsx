import React, { useEffect, useCallback } from 'react';

import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import { fetchProducts, selectProducts, useDispatch, useSelector } from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';

import ProductListing from './ProductListing';

const ProductListingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productsState = useSelector(selectProducts);

  useEffect(() => {
    if (productsState.pageNumber < 1) {
      dispatch(fetchProducts(productsState.pageNumber));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoadMoreClick = useCallback(() => {
    dispatch(fetchProducts(productsState.pageNumber));
  }, [dispatch, productsState.pageNumber]);

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
      <Loader
        show={productsState.isFetching} />
      <Button
        variant="secondary"
        disabled={productsState.collection.length === 0 || productsState.isFetching}
        onClick={handleLoadMoreClick}>
        {ContentUtil('common.loadMore')}
      </Button>
    </PageSection>
  );
};

export default ProductListingContainer;
