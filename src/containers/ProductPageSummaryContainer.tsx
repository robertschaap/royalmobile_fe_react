import React from 'react';
import { useContentCopy } from '../hooks';

import PageSection from '../components/PageSection';
import ProductPageSummary from '../components/ProductPageSummary';
import SectionHeader from '../components/SectionHeader';

const ProductPageSummaryContainer: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.summingUp')}</SectionHeader>
      <ProductPageSummary />
    </PageSection>
  );
};

export default ProductPageSummaryContainer;
