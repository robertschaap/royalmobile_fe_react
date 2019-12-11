import { StoreState } from '../reducers/index';
import { Subscription } from '../types/subscriptions';

export const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
export const FETCH_SUBSCRIPTIONS_ERROR = 'FETCH_SUBSCRIPTIONS_ERROR';

interface FetchSubscriptionsAction {
  type: typeof FETCH_SUBSCRIPTIONS;
}

export const fetchSubscriptions = (): SubscriptionsActionTypes => ({
  type: FETCH_SUBSCRIPTIONS,
});

interface FetchSubscriptionsSuccessAction {
  type: typeof FETCH_SUBSCRIPTIONS_SUCCESS;
  payload: Subscription[]
}

export const fetchSubscriptionsSuccess = (payload: Subscription[]): SubscriptionsActionTypes => ({
  type: FETCH_SUBSCRIPTIONS_SUCCESS,
  payload,
});

interface FetchSubscriptionsErrorAction {
  type: typeof FETCH_SUBSCRIPTIONS_ERROR;
  error: string;
}

export const fetchSubscriptionsError = (error: string): SubscriptionsActionTypes => ({
  type: FETCH_SUBSCRIPTIONS_ERROR,
  error,
});

export type SubscriptionsActionTypes =
  | FetchSubscriptionsAction
  | FetchSubscriptionsSuccessAction
  | FetchSubscriptionsErrorAction;

export const selectSubscriptions = (state: StoreState) => state.products;
export const selectProductsCollection = (state: StoreState) => state.products.collection;
