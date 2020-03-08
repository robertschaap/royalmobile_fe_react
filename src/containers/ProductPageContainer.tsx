import React, { useEffect } from 'react';
import { fetchProducts, fetchSubscriptions, selectProducts, selectSubscriptions, useDispatch, useSelector } from '../store';

import ErrorMessage from '../components/ErrorMessage';
import PageTitle from '../components/PageTitle';
import ProductPageConfigure from '../components/ProductPageConfigure';
import ProductPageCustomise from '../components/ProductPageCustomise';
import ProductPageOrder from '../components/ProductPageOrder';
import ProductPageSummary from '../components/ProductPageSummary';
import PageSection from '../components/PageSection';
import Loader from '../components/Loader';

const ProductPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productState = useSelector(selectProduct);
  const subscriptionsState = useSelector(selectSubscriptions);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  if (productState.hasError || subscriptionsState.hasError) {
    return (
      <>
        <PageTitle page="Product" />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  if (productState.isFetching || subscriptionsState.isFetching) {
    return (
      <>
        <PageTitle page="Product" />
        <PageSection>
          <Loader show />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page="Product" />
      <ProductPageCustomise />
      <ProductPageConfigure />
      <ProductPageSummary />
      <ProductPageOrder />
    </>
  );
};

export default ProductPageContainer;
