import SubscriptionUtil from '../SubscriptionUtil';
import { Subscription } from '../../types/subscriptions';

const subscriptions = [
  { durationId: 'duration-id1' },
  { durationId: 'duration-id1' },
  { durationId: 'duration-id2' },
  { durationId: 'duration-id2' },
] as Subscription[];


describe('SubscriptionUtil', () => {
  describe('getSubscriptionDurations', () => {
    it('should return an array of subscription duration ids', () => {
      expect(
        SubscriptionUtil.getSubscriptionDurations(subscriptions),
      ).toEqual(['duration-id1', 'duration-id2']);
    });

    it('should return an empty array if no subscriptions are passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionDurations([])
      ).toEqual([]);
    });
  });

  describe('getSubscriptionsByDuration', () => {
    it('should filter a list of subscriptions by duration id', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration(subscriptions, 'duration-id1')
      ).toEqual([
        { durationId: 'duration-id1' },
        { durationId: 'duration-id1' },
      ]);
    });

    it('should return an empty array if no subscriptions are passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration([], 'duration-id1')
      ).toEqual([]);
    });

    it('should return an empty array if no valid duration id is passed', () => {
      expect(
        SubscriptionUtil.getSubscriptionsByDuration(subscriptions, 'not-a-valid-id')
      ).toEqual([]);
    });
  });
});
