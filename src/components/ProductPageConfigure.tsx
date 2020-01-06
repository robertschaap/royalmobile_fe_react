import React from 'react';

import SectionHeader from './SectionHeader';
import DurationListing from './DurationListing';
import SubscriptionListing from './SubscriptionListing';
import PaymentSelector from './PaymentSelector';
import PageSection from './PageSection';
import { useContentCopy } from '../hooks';

const ProductPageConfigure: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.configurePlan')}</SectionHeader>
      <DurationListing />
      <SubscriptionListing />
      <PaymentSelector />
    </PageSection>
  );
};

export default ProductPageConfigure;
