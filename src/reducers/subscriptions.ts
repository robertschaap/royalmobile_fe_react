import produce from 'immer';

import {
  FETCH_SUBSCRIPTIONS_COLLECTION,
  FETCH_SUBSCRIPTIONS_COLLECTION_SUCCESS,
  FETCH_SUBSCRIPTIONS_COLLECTION_ERROR,
} from '../ducks/subscriptions';

import { Subscription } from '../types/subscriptions';

interface SubscriptionsState {
  isFetching: boolean;
  collection: Subscription[];
}

const initialState: SubscriptionsState = {
  isFetching: false,
  collection: [],
}

const subscriptions = (state = initialState, action: any) => {
  return produce(state, newState => {
    switch (action.type) {
      case FETCH_SUBSCRIPTIONS_COLLECTION:
        newState.isFetching = true;
        break;
      case FETCH_SUBSCRIPTIONS_COLLECTION_SUCCESS:
        newState.isFetching = false;
        break;
      case FETCH_SUBSCRIPTIONS_COLLECTION_ERROR:
        newState.isFetching = false;
        break;
      default:
        break;
    }

    return newState;
  });
};

export default subscriptions;
