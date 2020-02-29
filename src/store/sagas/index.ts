import { all } from 'redux-saga/effects';
import products from './products';
import subscriptions from './subscriptions';

function* rootSaga() {
  yield all([
    ...products,
    ...subscriptions,
  ]);
}

export default rootSaga;
