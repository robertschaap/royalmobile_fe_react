import { Subscription } from '../../../types/subscriptions';
import {
  fetchSubscriptions,
  fetchSubscriptionsError,
  fetchSubscriptionsSuccess,
  SubscriptionsActionTypes,
} from '../../ducks/subscriptions';
import { subscriptionsReducer, initialSubscriptionsState } from '../subscriptions';

describe('Subscriptions Reducer', () => {
  it('should return the initial state', () => {
    expect(subscriptionsReducer(initialSubscriptionsState, {} as SubscriptionsActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_SUBSCRIPTIONS', () => {
    expect(subscriptionsReducer(initialSubscriptionsState, fetchSubscriptions())).toEqual({
      isFetching: true,
      hasError: false,
      collection: [],
    });
  });

  // TODO: this doesn't handle the collection change
  it('should handle FETCH_SUBSCRIPTIONS_SUCCESS', () => {
    expect(subscriptionsReducer(initialSubscriptionsState, fetchSubscriptionsSuccess([{}] as Subscription[]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: [{}],
    });
  });

  it('should handle FETCH_SUBSCRIPTIONS_ERROR', () => {
    expect(subscriptionsReducer(initialSubscriptionsState, fetchSubscriptionsError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: [],
    });
  });
});
