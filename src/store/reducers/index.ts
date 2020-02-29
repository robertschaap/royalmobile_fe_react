import { combineReducers } from 'redux';

import { productReducer, initialProductState } from './product';
import { productsReducer, initialProductsState } from './products';
import { subscriptionsReducer, initialSubscriptionsState } from './subscriptions';

export const initialState = {
  product: initialProductState,
  products: initialProductsState,
  subscriptions: initialSubscriptionsState,
};

export const rootReducer = () => combineReducers({
  product: productReducer,
  products: productsReducer,
  subscriptions: subscriptionsReducer,
});

export type StoreState = ReturnType<ReturnType<typeof rootReducer>>
