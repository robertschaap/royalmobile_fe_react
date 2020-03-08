import { all } from 'redux-saga/effects';
import product from './product';
import products from './products';
import subscriptions from './subscriptions';

function* rootSaga() {
  yield all([
    ...product,
    ...products,
    ...subscriptions,
  ]);
}

export default rootSaga;
