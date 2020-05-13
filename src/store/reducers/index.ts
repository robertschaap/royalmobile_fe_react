import { combineReducers } from 'redux';

import { productReducer } from './product';
import { productsReducer } from './products';
import { subscriptionsReducer } from './subscriptions';

export const rootReducer = () => combineReducers({
  product: productReducer,
  products: productsReducer,
  subscriptions: subscriptionsReducer,
});

export type StoreState = ReturnType<ReturnType<typeof rootReducer>>
