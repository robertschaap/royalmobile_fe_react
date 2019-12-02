import React from 'react';

import SectionHeader from './SectionHeader';
import DurationListing from './DurationListing';
import SubscriptionListing from './SubscriptionListing';
import PaymentSelector from './PaymentSelector';
import PageSection from './PageSection';

const ProductPageConfigure: React.FC = () => {
  return (
    <PageSection>
      <SectionHeader>Configure your plan</SectionHeader>
      <DurationListing />
      <SubscriptionListing />
      <PaymentSelector />
    </PageSection>
  );
};

export default ProductPageConfigure;
