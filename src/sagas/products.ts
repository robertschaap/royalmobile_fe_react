import { call, put, takeEvery } from 'redux-saga/effects'
import api from '../utils/api';
import routes from '../constants/routes';

import {
  FETCH_PRODUCTS_COLLECTION,
  fetchProductsCollectionSuccess,
  fetchProductsCollectionError,
} from '../ducks/products';

function* fetchProductsCollectionSaga() {
  yield call(api.get, {
    url: routes.API_GET_PRODUCTS,
    onSuccess: fetchProductsCollectionSuccess,
    onError: fetchProductsCollectionError,
  });
}

export default [
  takeEvery(FETCH_PRODUCTS_COLLECTION, fetchProductsCollectionSaga),
];
