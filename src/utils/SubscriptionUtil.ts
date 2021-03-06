import { Subscription } from '../types/subscriptions';

import dedupeArray from './dedupeArray';

const getSubscription = (subscriptions: Subscription[], subscriptionId: string) => {
  return subscriptions.find((subscription) => subscription.subscriptionId === subscriptionId);
};

/**
 * Returns a de-duplicated array of `durationId` keys from an array of `Subscription` objects
 */
const getSubscriptionDurations = (subscriptions: Subscription[]): string[] => {
  const durationIds = subscriptions.map((subscription) => subscription.durationId);
  return dedupeArray(durationIds);
};

/**
 * Returns an array of `Subscription` objects filtered by `durationId`
 */
const getSubscriptionsByDuration = (subscriptions: Subscription[], durationId: string): Subscription[] => {
  return subscriptions.filter((subscription) => subscription.durationId === durationId);
};

export default {
  getSubscription,
  getSubscriptionDurations,
  getSubscriptionsByDuration,
};
