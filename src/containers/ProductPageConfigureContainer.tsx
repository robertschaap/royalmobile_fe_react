import React, { useState, useCallback } from 'react';
import {
  selectProductSelection,
  selectSubscriptionsCollection,
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
import SubscriptionUtil from '../utils/SubscriptionUtil';

const ProductPageConfigureContainer: React.FC = () => {
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);
  const subscriptions = useSelector(selectSubscriptionsCollection);

  const durations = SubscriptionUtil.getSubscriptionDurations(subscriptions);
  const subscriptionsByDuration = SubscriptionUtil.getSubscriptionsByDuration(subscriptions, productSelection.durationId || durations[0]);

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
        subscriptions={subscriptionsByDuration}
        selectedSubscriptionId={productSelection.subscriptionId || subscriptionsByDuration[0].subscriptionId} />
      <PaymentSelector
        onChangeToggle={() => setIsToggleActive(!isToggleActive)}
        isToggleActive={isToggleActive}/>
    </PageSection>
  );
};

export default ProductPageConfigureContainer;
