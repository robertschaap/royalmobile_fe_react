import { Subscription } from '../../types/subscriptions';
import SubscriptionUtil from '../SubscriptionUtil';

const subscriptions = [
  { durationId: 'duration-id1', subscriptionId: 'subscription-id1' },
  { durationId: 'duration-id1', subscriptionId: 'subscription-id2' },
  { durationId: 'duration-id2', subscriptionId: 'subscription-id3' },
  { durationId: 'duration-id2', subscriptionId: 'subscription-id4' },
] as Subscription[];

describe('SubscriptionUtil', () => {
  describe('getSubscription', () => {
    it('should return a subscription if a match is found', () => {
      expect(
        SubscriptionUtil.getSubscription(subscriptions, 'subscription-id1'),
      ).toEqual({
        durationId: 'duration-id1',
        subscriptionId: 'subscription-id1',
      });
    });

    it('should return undefined if no subscriptions are passed', () => {
      expect(
        SubscriptionUtil.getSubscription([], 'subscription-id1'),
      ).toEqual(undefined);
    });

    it('should return undefined if no valid subscription id is passed', () => {
      expect(
        SubscriptionUtil.getSubscription(subscriptions, 'not-a-valid-id'),
      ).toEqual(undefined);
    });
  });

  describe('getSubscriptionDurations', () => {
    it('should return an array of subscription duration ids', () => {
      expect(
        SubscriptionUtil.getSubscriptionDurations(subscriptions),
      ).toEqual(['duration-id1', 'duration-id2']);
    });

    it('should return an empty array if no subscriptions are passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionDurations([]),
      ).toEqual([]);
    });
  });

  describe('getSubscriptionsByDuration', () => {
    it('should filter a list of subscriptions by duration id', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration(subscriptions, 'duration-id1'),
      ).toEqual([
        { durationId: 'duration-id1', subscriptionId: 'subscription-id1' },
        { durationId: 'duration-id1', subscriptionId: 'subscription-id2' },
      ]);
    });

    it('should return an empty array if no subscriptions are passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration([], 'duration-id1'),
      ).toEqual([]);
    });

    it('should return an empty array if no valid duration id is passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration(subscriptions, 'not-a-valid-id'),
      ).toEqual([]);
    });
  });
});
