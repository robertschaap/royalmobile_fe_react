import { subscriptionsReducer } from '../subscriptions';

import {
  fetchSubscriptions,
  fetchSubscriptionsError,
  fetchSubscriptionsSuccess,
  SubscriptionsActionTypes,
} from '../../ducks/subscriptions';

describe('Subscriptions Reducer', () => {
  it('should return the initial state', () => {
    expect(subscriptionsReducer(undefined, {} as SubscriptionsActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_SUBSCRIPTIONS', () => {
    expect(subscriptionsReducer(undefined, fetchSubscriptions())).toEqual({
      isFetching: true,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_SUBSCRIPTIONS_SUCCESS', () => {
    expect(subscriptionsReducer(undefined, fetchSubscriptionsSuccess([]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_SUBSCRIPTIONS_ERROR', () => {
    expect(subscriptionsReducer(undefined, fetchSubscriptionsError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: [],
    });
  });
});
