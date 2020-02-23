import { StoreState } from '../reducers';
import { Subscription } from '../types/subscriptions';

export enum Actions {
  FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS',
  FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS',
  FETCH_SUBSCRIPTIONS_ERROR = 'FETCH_SUBSCRIPTIONS_ERROR',
}

interface FetchSubscriptionsAction {
  type: typeof Actions.FETCH_SUBSCRIPTIONS;
}

export const fetchSubscriptions = (): SubscriptionsActionTypes => ({
  type: Actions.FETCH_SUBSCRIPTIONS,
});

interface FetchSubscriptionsSuccessAction {
  type: typeof Actions.FETCH_SUBSCRIPTIONS_SUCCESS;
  payload: Subscription[]
}

export const fetchSubscriptionsSuccess = (payload: Subscription[]): SubscriptionsActionTypes => ({
  type: Actions.FETCH_SUBSCRIPTIONS_SUCCESS,
  payload,
});

interface FetchSubscriptionsErrorAction {
  type: typeof Actions.FETCH_SUBSCRIPTIONS_ERROR;
  error: string;
}

export const fetchSubscriptionsError = (error: string): SubscriptionsActionTypes => ({
  type: Actions.FETCH_SUBSCRIPTIONS_ERROR,
  error,
});

export type SubscriptionsActionTypes =
  | FetchSubscriptionsAction
  | FetchSubscriptionsSuccessAction
  | FetchSubscriptionsErrorAction;

export const selectSubscriptions = (state: StoreState) => state.subscriptions;
export const selectSubscriptionsCollection = (state: StoreState) => state.subscriptions.collection;
