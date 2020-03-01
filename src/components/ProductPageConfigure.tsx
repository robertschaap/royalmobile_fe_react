import React, { useState } from 'react';

import SectionHeader from './SectionHeader';
import DurationListing from './DurationListing';
import SubscriptionListing from './SubscriptionListing';
import PaymentSelector from './PaymentSelector';
import PageSection from './PageSection';
import { useContentCopy } from '../hooks';

const ProductPageConfigure: React.FC = () => {
  const durations = [
    { id: 'a', duration: '2 year contract' },
    { id: 'b', duration: '1 year contract' },
  ];

  const [selectedDurationId, setSelectedDurationId] = useState(durations[0].id);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.configurePlan')}</SectionHeader>
      <DurationListing
        onClickDuration={(id) => setSelectedDurationId(id)}
        durations={durations}
        selectedDurationId={selectedDurationId}/>
      <SubscriptionListing />
      <PaymentSelector />
    </PageSection>
  );
};

export default ProductPageConfigure;
