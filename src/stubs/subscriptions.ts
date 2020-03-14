import { Subscription } from '../types/subscriptions';

interface CreateSubscripton {
  id: number;
  data: string;
  duration: string;
  price: string;
}

const createSubscription = (props: CreateSubscripton): Subscription => {
  const { id, data, duration, price } = props;

  return {
    id: id,
    subscriptionId: `royalmobile-${data}-${duration}year`,
    durationId: `${duration}_year`,
    data: data,
    benefits_long: [
      'unlimited calls',
      'unlimited texts',
      'unlimited roaming',
    ],
    benefits_short: 'unlimited\n calls, text, roaming',
    regular_price: price,
  };
}

export const subscriptions: Subscription[] = [
  createSubscription({ id: 1, data: '20gb', duration: '1', price: '20' }),
  createSubscription({ id: 2, data: '40gb', duration: '1', price: '30' }),
  createSubscription({ id: 3, data: '60gb', duration: '1', price: '40' }),
  createSubscription({ id: 4, data: '80gb', duration: '1', price: '50' }),

  createSubscription({ id: 5, data: '20gb', duration: '2', price: '18' }),
  createSubscription({ id: 6, data: '40gb', duration: '2', price: '26' }),
  createSubscription({ id: 7, data: '60gb', duration: '2', price: '34' }),
  createSubscription({ id: 8, data: '80gb', duration: '2', price: '42' }),
];
