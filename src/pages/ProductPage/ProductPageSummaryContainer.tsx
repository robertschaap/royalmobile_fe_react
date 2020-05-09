import React from 'react';

import {
  useSelector,
  selectProductSelection,
} from '../../store';

import { useContentCopy } from '../../hooks';

import PageSection from '../../components/PageSection';
import ProductPageSummary from '../../components/ProductPageSummary';
import SectionHeader from '../../components/SectionHeader';

const ProductPageSummaryContainer: React.FC = () => {
  const selection = useSelector(selectProductSelection);
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.summingUp')}</SectionHeader>
      <ProductPageSummary />
      <pre>{JSON.stringify(selection, null, 2)}</pre>
    </PageSection>
  );
};

export default ProductPageSummaryContainer;
