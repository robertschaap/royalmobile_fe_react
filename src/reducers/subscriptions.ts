import produce from 'immer';

import {
  SubscriptionsActions,
  SubscriptionsActionTypes,
} from '../store/ducks/subscriptions';

import { Subscription } from '../types/subscriptions';

interface SubscriptionsState {
  isFetching: boolean;
  hasError: boolean;
  collection: Subscription[];
}

export const initialSubscriptionsState: SubscriptionsState = {
  isFetching: false,
  hasError: false,
  collection: [],
};

export const subscriptionsReducer = (state: SubscriptionsState = initialSubscriptionsState, action: SubscriptionsActionTypes) => {
  return produce<SubscriptionsState>(state, (newState) => {
    switch (action.type) {
      case SubscriptionsActions.FETCH_SUBSCRIPTIONS:
        newState.isFetching = true;
        newState.hasError = false;
        break;
      case SubscriptionsActions.FETCH_SUBSCRIPTIONS_SUCCESS:
        newState.isFetching = false;
        newState.collection = action.payload;
        break;
      case SubscriptionsActions.FETCH_SUBSCRIPTIONS_ERROR:
        newState.isFetching = false;
        newState.hasError = true;
        break;
      default:
        break;
    }

    return newState;
  });
};
