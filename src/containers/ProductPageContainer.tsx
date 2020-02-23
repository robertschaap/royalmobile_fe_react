import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../store';
import { selectProducts, fetchProducts } from '../ducks/products';
import { selectSubscriptions, fetchSubscriptions } from '../ducks/subscriptions';

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
  const productsState = useSelector(selectProducts);
  const subscriptionsState = useSelector(selectSubscriptions);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSubscriptions());
  }, [dispatch]);

  if (productsState.hasError || subscriptionsState.hasError) {
    return (
      <>
        <PageTitle page="Product" />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  if (productsState.isFetching || subscriptionsState.isFetching) {
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
