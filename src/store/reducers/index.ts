import { combineReducers } from 'redux';

import { authReducer } from './auth';
import { cartReducer } from './cart';
import { productReducer } from './product';
import { productsReducer } from './products';
import { subscriptionsReducer } from './subscriptions';

export const rootReducer = () => combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
  subscriptions: subscriptionsReducer,
});

export type StoreState = ReturnType<ReturnType<typeof rootReducer>>;
