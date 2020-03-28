import { Subscription } from '../types/subscriptions';

export const SubscriptionFactory = (data?: string, duration?: number, regular_price?: string) => {
  return {
    subscriptionId: (i: string) => `subscription-id${i + 1}`,
    durationId: 'duration-id1',
    data: '00gb',
    benefits_long: ['benefit-1', 'benefit-2', 'benefit-3'],
    benefits_short: 'benefits-short',
    regular_price: '00',
  };
};

const createSubscription = (data: string, duration: number, regular_price: string): Omit<Subscription, 'id'> => {
  return {
    subscriptionId: `royalmobile-${data}-${duration}year`,
    data,
    durationId: `${duration}_year`,
    benefits_long: [
      'unlimited calls',
      'unlimited texts',
      'unlimited roaming',
    ],
    benefits_short: 'unlimited\n calls, text, roaming',
    regular_price,
  };
};

export const seedSubscriptions = (server: any) => {
  server.create('subscription', createSubscription('20gb', 1, '20'));
  server.create('subscription', createSubscription('40gb', 1, '30'));
  server.create('subscription', createSubscription('60gb', 1, '40'));
  server.create('subscription', createSubscription('80gb', 1, '50'));
  server.create('subscription', createSubscription('20gb', 2, '18'));
  server.create('subscription', createSubscription('40gb', 2, '26'));
  server.create('subscription', createSubscription('60gb', 2, '34'));
  server.create('subscription', createSubscription('80gb', 2, '42'));
};
