import { combineReducers } from 'redux';

import { productsReducer, initialProductsState } from './products';
import { subscriptionsReducer, initialSubscriptionsState } from './subscriptions';

export const initialState = {
  products: initialProductsState,
  subscriptions: initialSubscriptionsState,
};

export const rootReducer = () => combineReducers({
  products: productsReducer,
  subscriptions: subscriptionsReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
