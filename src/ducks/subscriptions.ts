import { StoreState } from '../reducers/index'

export const FETCH_SUBSCRIPTIONS_COLLECTION = 'FETCH_SUBSCRIPTIONS_COLLECTION';
export const FETCH_SUBSCRIPTIONS_COLLECTION_SUCCESS = 'FETCH_SUBSCRIPTIONS_COLLECTION_SUCCESS';
export const FETCH_SUBSCRIPTIONS_COLLECTION_ERROR = 'FETCH_SUBSCRIPTIONS_COLLECTION_ERROR';

export const fetchSubscriptionsCollection = () => ({
  type: FETCH_SUBSCRIPTIONS_COLLECTION,
});

export const fetchSubscriptionsCollectionSuccess = (payload: any) => ({
  type: FETCH_SUBSCRIPTIONS_COLLECTION_SUCCESS,
  payload,
});

export const fetchSubscriptionsCollectionError = (error: any) => ({
  type: FETCH_SUBSCRIPTIONS_COLLECTION_ERROR,
  error,
});

export const getSubscriptions = (state: StoreState) => state.products;
export const getProductsCollection = (state: StoreState) => state.products.collection;
