import { all } from 'redux-saga/effects';

import auth from './auth';
import cart from './cart';
import product from './product';
import products from './products';
import subscriptions from './subscriptions';

function* rootSaga() {
  yield all([
    ...auth,
    ...cart,
    ...product,
    ...products,
    ...subscriptions,
  ]);
}

export default rootSaga;
