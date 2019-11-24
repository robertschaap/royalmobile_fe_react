import { StoreState } from '../reducers/index'

export const FETCH_SUBSCRIPTIONS = 'FETCH_SUBSCRIPTIONS';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'FETCH_SUBSCRIPTIONS_SUCCESS';
export const FETCH_SUBSCRIPTIONS_ERROR = 'FETCH_SUBSCRIPTIONS_ERROR';

export const fetchSubscriptions = () => ({
  type: FETCH_SUBSCRIPTIONS,
});

export const fetchSubscriptionsSuccess = (payload: any) => ({
  type: FETCH_SUBSCRIPTIONS_SUCCESS,
  payload,
});

export const fetchSubscriptionsError = (error: any) => ({
  type: FETCH_SUBSCRIPTIONS_ERROR,
  error,
});

export const getSubscriptions = (state: StoreState) => state.products;
export const getProductsCollection = (state: StoreState) => state.products.collection;
