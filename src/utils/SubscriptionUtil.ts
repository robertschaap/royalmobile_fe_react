import { Subscription } from '../types/subscriptions';
import dedupeArray from '../utils/dedupeArray';

/**
 * Returns a de-duplicated array of `durationId` keys from an array of `Subscription` objects
 */
const getSubscriptionDurations = (subscriptions: Subscription[]) => {
  const durationIds = subscriptions.map(subscription => subscription.durationId);
  return dedupeArray(durationIds);
};

export default {
  getSubscriptionDurations,
};
