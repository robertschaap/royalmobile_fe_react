import React, { useState, useCallback, useMemo } from 'react';
import {
  selectProductSelection,
  setProductSelectedDurationId,
  setProductSelectedSubscriptionId,
  useDispatch,
  useSelector,
} from '../../store';
import { useContentCopy } from '../../hooks';
import SubscriptionUtil from '../../utils/SubscriptionUtil';

import SectionHeader from '../../components/SectionHeader';
import DurationListing from './DurationListing';
import SubscriptionListing from './SubscriptionListing';
import PaymentSelector from './PaymentSelector';
import PageSection from '../../components/PageSection';
import { Subscription } from '../../types/subscriptions';

interface ProductPageConfigureContainerProps {
  subscriptions: Subscription[];
}

const ProductPageConfigureContainer: React.FC<ProductPageConfigureContainerProps> = (props) => {
  const { subscriptions } = props;
  const dispatch = useDispatch();
  const productSelection = useSelector(selectProductSelection);

  const durations = useMemo(() => {
    return SubscriptionUtil.getSubscriptionDurations(subscriptions);
  }, [subscriptions]);

  const subscriptionsByDuration = useMemo(() => {
    return SubscriptionUtil.getSubscriptionsByDuration(subscriptions, productSelection.durationId || durations[0]);
  }, [subscriptions, productSelection.durationId, durations]);

  const onClickDuration = useCallback((id) => {
    dispatch(setProductSelectedDurationId(id));
  }, [dispatch]);

  const onClickSubscription = useCallback((id) => {
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
