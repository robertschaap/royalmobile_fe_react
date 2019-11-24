import produce from 'immer';

import {
  FETCH_SUBSCRIPTIONS,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_ERROR,
} from '../ducks/subscriptions';

import { Subscription } from '../types/subscriptions';

interface SubscriptionsState {
  isFetching: boolean;
  collection: Subscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  isFetching: false,
  collection: [],
}

export const subscriptionsReducer = (state = initialSubscriptionsState, action: any) => {
  return produce(state, newState => {
    switch (action.type) {
      case FETCH_SUBSCRIPTIONS:
        newState.isFetching = true;
        break;
      case FETCH_SUBSCRIPTIONS_SUCCESS:
        newState.isFetching = false;
        break;
      case FETCH_SUBSCRIPTIONS_ERROR:
        newState.isFetching = false;
        break;
      default:
        break;
    }

    return newState;
  });
};
