import React, { useState } from 'react';

import SectionHeader from '../components/SectionHeader';
import DurationListing from '../components/DurationListing';
import SubscriptionListing from '../components/SubscriptionListing';
import PaymentSelector from '../components/PaymentSelector';
import PageSection from '../components/PageSection';
import { useContentCopy } from '../hooks';

const ProductPageConfigureContainer: React.FC = () => {
  const durations = [
    { id: 'a', duration: '2 year contract' },
    { id: 'b', duration: '1 year contract' },
  ];

  const subscriptions = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];

  const [selectedDurationId, setSelectedDurationId] = useState(durations[0].id);
  const [selectedSubscriptionId, setSelectedSubscriptionId] = useState(subscriptions[0].id);
  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.configurePlan')}</SectionHeader>
      <DurationListing
        onClickDuration={(id) => setSelectedDurationId(id)}
        durations={durations}
        selectedDurationId={selectedDurationId}/>
      <SubscriptionListing
        onClickSubscription={(id) => setSelectedSubscriptionId(id)}
        subscriptions={subscriptions}
        selectedSubscriptionId={selectedSubscriptionId} />
      <PaymentSelector
        onChangeToggle={() => setIsToggleActive(!isToggleActive)}
        isToggleActive={isToggleActive}/>
    </PageSection>
  );
};

export default ProductPageConfigureContainer;
