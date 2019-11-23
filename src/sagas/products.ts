import { call, takeEvery } from 'redux-saga/effects'
import api from '../utils/api';

import {
  FETCH_PRODUCTS_COLLECTION,
  fetchProductsCollectionSuccess,
  fetchProductsCollectionError,
} from '../ducks/products';

function* fetchProductsCollectionSaga() {
  yield call(api.get, {
    url: "",
    onSuccess: fetchProductsCollectionSuccess,
    onError: fetchProductsCollectionError,
  });
}

export default [
  takeEvery(FETCH_PRODUCTS_COLLECTION, fetchProductsCollectionSaga),
];
