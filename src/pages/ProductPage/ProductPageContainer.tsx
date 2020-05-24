import React, { useEffect } from 'react';

import {
  fetchProduct,
  fetchSubscriptions,
  selectProduct,
  selectSubscriptions,
  useDispatch,
  useSelector,
} from '../../store';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import ProductPageConfigureContainer from './ProductPageConfigureContainer';
import ProductPageCustomiseContainer from './ProductPageCustomiseContainer';
import ProductPageOrder from './ProductPageOrder';
import ProductPageSummaryContainer from './ProductPageSummaryContainer';

import { useRouteParams } from '../../hooks';
import noop from '../../utils/noop';
import routes from '../../constants/routes';

const ProductPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productState = useSelector(selectProduct);
  const subscriptionsState = useSelector(selectSubscriptions);

  const { id } = useRouteParams(routes.PRODUCT_PAGE);

  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(fetchSubscriptions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  if (!productState.collection || !subscriptionsState.collection.length) {
    return (
      <>
        <PageTitle page="Product" />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page="Product" />
      <ProductPageCustomiseContainer
        product={productState.collection} />
      <ProductPageConfigureContainer
        subscriptions={subscriptionsState.collection} />
      <ProductPageSummaryContainer />
      <ProductPageOrder
        onClickOrder={noop}
        onClickRenewContract={noop} />
    </>
  );
};

export default ProductPageContainer;
