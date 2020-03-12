import SubscriptionUtil from '../SubscriptionUtil';
import { Subscription } from '../../types/subscriptions';

const subscriptions = [
  { durationId: 'duration-id1' },
  { durationId: 'duration-id1' },
  { durationId: 'duration-id1' },
] as Subscription[];

describe('SubscriptionUtil', () => {
  it('should return an array of subscription duration ids', () => {
    expect(
      SubscriptionUtil.getSubscriptionDurations(subscriptions),
    ).toEqual(['duration-id1']);
  });

  it('should return an empty array if no subscriptions are passed', () => {
    expect(
      SubscriptionUtil.getSubscriptionDurations([])
    ).toEqual([]);
  })
});
