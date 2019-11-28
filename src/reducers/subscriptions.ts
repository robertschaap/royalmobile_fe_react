import produce from 'immer';

import {
  FETCH_SUBSCRIPTIONS,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_ERROR,
  SubscriptionsActionTypes,
} from '../ducks/subscriptions';

import { Subscription } from '../types/subscriptions';

interface SubscriptionsState {
  isFetching: boolean;
  collection: Subscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  isFetching: false,
  collection: [],
};

export const subscriptionsReducer = (state: SubscriptionsState = initialSubscriptionsState, action: SubscriptionsActionTypes) => {
  return produce<SubscriptionsState>(state, (newState) => {
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
