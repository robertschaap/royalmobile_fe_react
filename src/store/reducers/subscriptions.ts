import produce from 'immer';

import {
  SubscriptionsActions,
  SubscriptionsActionTypes,
} from '../ducks/subscriptions';

import { Subscription } from '../../types/subscriptions';

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

export const subscriptionsReducer = produce((draft: SubscriptionsState = initialSubscriptionsState, action: SubscriptionsActionTypes) => {
  switch (action.type) {
    case SubscriptionsActions.FETCH_SUBSCRIPTIONS:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case SubscriptionsActions.FETCH_SUBSCRIPTIONS_SUCCESS:
      draft.isFetching = false;
      draft.collection = action.payload;
      break;
    case SubscriptionsActions.FETCH_SUBSCRIPTIONS_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    default:
      break;
  }

  return draft;
});
