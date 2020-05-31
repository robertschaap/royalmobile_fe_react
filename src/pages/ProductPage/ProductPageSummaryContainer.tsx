import React from 'react';

import {
  useSelector,
  selectProductSelection,
} from '../../store';

import { useContentCopy, useOrderSummary } from '../../hooks';
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

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.summingUp')}</SectionHeader>
      {orderSummary && (
        <ProductPageSummary
          deviceModel={product.model}
          orderSummary={orderSummary} />
      )}
    </PageSection>
  );
};

export default ProductPageSummaryContainer;
