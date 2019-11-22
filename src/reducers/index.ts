import { combineReducers } from "redux";

import products from './products';
import subscriptions from './subscriptions';

const rootReducer = combineReducers({
  products,
  subscriptions,
});

export default rootReducer;
export type StoreState = ReturnType<typeof rootReducer>;
