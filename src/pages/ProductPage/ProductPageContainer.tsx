import React, { useEffect } from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import routes from '../../constants/routes';
import { useRouteParams } from '../../hooks';
import {
  invalidateProductCollection,
  fetchProduct,
  fetchSubscriptions,
  selectProduct,
  selectSubscriptions,
  setProductSelectedDurationId,
  setProductSelectedSubscriptionId,
  setProductSelectedVariantId,
  useDispatch,
  useSelector,
} from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';

import ProductPageConfigureContainer from './ProductPageConfigureContainer';
import ProductPageCustomiseContainer from './ProductPageCustomiseContainer';
import ProductPageOrderContainer from './ProductPageOrderContainer';
import ProductPageSummaryContainer from './ProductPageSummaryContainer';

const ProductPageContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productState = useSelector(selectProduct);
  const subscriptionsState = useSelector(selectSubscriptions);

  const { id } = useRouteParams(routes.PRODUCT_PAGE);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id));
      dispatch(fetchSubscriptions());
    }

    return () => {
      dispatch(invalidateProductCollection());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const {
      durationId,
      subscriptionId,
      variantId,
    } = productState.selection;

    if (productState.collection && !variantId) {
      dispatch(setProductSelectedVariantId(productState.collection.variants[0].variantId));
    }

    if (subscriptionsState.collection.length && !durationId && !subscriptionId) {
      dispatch(setProductSelectedDurationId(subscriptionsState.collection[0].durationId));
      dispatch(setProductSelectedSubscriptionId(subscriptionsState.collection[0].subscriptionId));
    }
  }, [dispatch, productState, subscriptionsState]);

  if (productState.hasError || subscriptionsState.hasError) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.product')} />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  if (productState.isFetching || subscriptionsState.isFetching) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.product')} />
        <PageSection>
          <Loader show />
        </PageSection>
      </>
    );
  }

  if (!productState.collection || !subscriptionsState.collection.length) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.product')} />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page={ContentUtil('pages.product')} />
      <ProductPageCustomiseContainer
        product={productState.collection} />
      <ProductPageConfigureContainer
        subscriptions={subscriptionsState.collection} />
      <ProductPageSummaryContainer
        product={productState.collection}
        subscriptions={subscriptionsState.collection} />
      <ProductPageOrderContainer />
    </>
  );
};

export default ProductPageContainer;
