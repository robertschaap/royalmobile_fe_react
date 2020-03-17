import React, { useEffect } from 'react';

import {
  fetchProduct,
  fetchSubscriptions,
  selectProduct,
  selectSubscriptions,
  useDispatch,
  useSelector
} from '../store';

import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import PageSection from '../components/PageSection';
import PageTitle from '../components/PageTitle';
import ProductPageConfigureContainer from '../containers/ProductPageConfigureContainer';
import ProductPageCustomiseContainer from '../containers/ProductPageCustomiseContainer';
import ProductPageOrder from '../components/ProductPageOrder';
import ProductPageSummaryContainer from '../containers/ProductPageSummaryContainer';

import noop from '../utils/noop';

const ProductPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productState = useSelector(selectProduct);
  const subscriptionsState = useSelector(selectSubscriptions);

  useEffect(() => {
    // TODO get from location
    dispatch(fetchProduct('apple-iphonex'));
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

  // TODO: consider if no product/subscription being found is a valid usecase
  if (!productState.collection || !subscriptionsState.collection.length) {
    return null;
  }

  return (
    <>
      <PageTitle page="Product" />
      <ProductPageCustomiseContainer />
      <ProductPageConfigureContainer />
      <ProductPageSummaryContainer />
      <ProductPageOrder
        onClickOrder={noop}
        onClickRenewContract={noop} />
    </>
  );
};

export default ProductPageContainer;
