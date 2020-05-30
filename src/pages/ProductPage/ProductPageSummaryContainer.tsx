import React from 'react';

import {
  useSelector,
  selectProductSelection,
} from '../../store';

import { useContentCopy, useOrderSummary } from '../../hooks';
import ProductUtil from '../../utils/ProductUtil';
import SubscriptionUtil from '../../utils/SubscriptionUtil';
import { Product } from '../../types/products';
import { Subscription } from '../../types/subscriptions';

import PageSection from '../../components/PageSection';
import ProductPageSummary from './ProductPageSummary';
import SectionHeader from '../../components/SectionHeader';

interface ProductPageSummaryContainerProps {
  product: Product;
  subscriptions: Subscription[];
}

const ProductPageSummaryContainer: React.FC<ProductPageSummaryContainerProps> = (props) => {
  const { product, subscriptions } = props;
  const selection = useSelector(selectProductSelection);
  const orderSummary = useOrderSummary(product.variants, subscriptions, selection);

  const selectedVariant = ProductUtil.getProductVariant(product.variants, selection.variantId || '');
  const selectedSubscription = SubscriptionUtil.getSubscription(subscriptions, selection.subscriptionId || '');

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.summingUp')}</SectionHeader>
      {orderSummary && (
        <ProductPageSummary
          deviceModel={product.model}
          orderSummary={orderSummary} />
      )}
      <pre>{JSON.stringify(selection, null, 2)}</pre>
      <pre>{JSON.stringify(selectedVariant, null, 2)}</pre>
      <pre>{JSON.stringify(selectedSubscription, null, 2)}</pre>
    </PageSection>
  );
};

export default ProductPageSummaryContainer;
