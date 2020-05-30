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
    return SubscriptionUtil.getSubscriptionsByDuration(subscriptions, productSelection.durationId || '');
  }, [subscriptions, productSelection.durationId]);

  const onClickDuration = useCallback((id) => {
    dispatch(setProductSelectedDurationId(id));
  }, [dispatch]);

  const onClickSubscription = useCallback((id) => {
    dispatch(setProductSelectedSubscriptionId(id));
  }, [dispatch]);

  return (
    <PageSection>
      <SectionHeader>{useContentCopy('product.configurePlan')}</SectionHeader>
      {productSelection.durationId && productSelection.subscriptionId && (
        <>
          <DurationListing
            onClickDuration={onClickDuration}
            durations={durations}
            selectedDurationId={productSelection.durationId} />
          <SubscriptionListing
            onClickSubscription={onClickSubscription}
            subscriptions={subscriptionsByDuration}
            selectedSubscriptionId={productSelection.subscriptionId} />
          <PaymentSelector />
        </>
      )}
    </PageSection>
  );
};

export default ProductPageConfigureContainer;
