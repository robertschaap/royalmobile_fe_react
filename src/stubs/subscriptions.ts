import { Subscription } from '../types/subscriptions';

const subscription: Subscription = {
  id: 1,
  subscriptionId: 'royalmobile-10gb-2year',
  duration: '2_year',
  data: '10gb',
  benefits_long: [
    'unlimited calls',
    'unlimited texts',
    'unlimited roaming',
  ],
  benefits_short: 'unlimited<br/> calls, text, roaming',
  regular_price: '20',
};

export const subscriptions: Subscription[] = [
  { ...subscription, id: 1 },
  { ...subscription, id: 2 },
  { ...subscription, id: 3 },
  { ...subscription, id: 4 },
];
