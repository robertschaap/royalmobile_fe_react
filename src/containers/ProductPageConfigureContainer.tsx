import React, { useState, useCallback } from 'react';
import {
  selectProductSelection,
  setProductSelectedDurationId,
  setProductSelectedSubscriptionId,
  useDispatch,
  useSelector,
} from '../store';
import SectionHeader from '../components/SectionHeader';
import DurationListing from '../components/DurationListing';
import SubscriptionListing from '../components/SubscriptionListing';
import PaymentSelector from '../components/PaymentSelector';
import PageSection from '../components/PageSection';
import { useContentCopy } from '../hooks';

const ProductPageConfigureContainer: React.FC = () => {
  const durations = ['2 year contract', '1 year contract'];

  const subscriptions = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];

  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);

  const onClickDuration = useCallback(id => {
    dispatch(setProductSelectedDurationId(id));
  }, [dispatch]);

  const onClickSubscription = useCallback(id => {
    dispatch(setProductSelectedSubscriptionId(id));
  }, [dispatch]);

  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.configurePlan')}</SectionHeader>
      <DurationListing
        onClickDuration={onClickDuration}
        durations={durations}
        selectedDurationId={productSelection.durationId || durations[0]} />
      <SubscriptionListing
        onClickSubscription={onClickSubscription}
        subscriptions={subscriptions}
        selectedSubscriptionId={productSelection.subscriptionId || subscriptions[0].id} />
      <PaymentSelector
        onChangeToggle={() => setIsToggleActive(!isToggleActive)}
        isToggleActive={isToggleActive}/>
    </PageSection>
  );
};

export default ProductPageConfigureContainer;
