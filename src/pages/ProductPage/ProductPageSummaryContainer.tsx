import React from 'react';

import PageSection from '../../components/PageSection';
import SectionHeader from '../../components/SectionHeader';
import { useOrderSummary } from '../../hooks';
import {
  useSelector,
  selectProductSelection,
} from '../../store';
import { Product } from '../../types/products';
import { Subscription } from '../../types/subscriptions';
import { ContentUtil } from '../../utils/ContentUtil';

import ProductPageSummary from './ProductPageSummary';

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
      <SectionHeader>{ContentUtil('product.summingUp')}</SectionHeader>
      {orderSummary && (
        <ProductPageSummary
          deviceModel={product.model}
          orderSummary={orderSummary} />
      )}
    </PageSection>
  );
};

export default ProductPageSummaryContainer;
