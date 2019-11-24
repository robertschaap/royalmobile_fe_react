import { call, takeEvery } from 'redux-saga/effects'
import api from '../utils/api';
import routes from '../constants/routes';

import {
  FETCH_PRODUCTS,
  fetchProductsSuccess,
  fetchProductsError,
} from '../ducks/products';

function* fetchProductsSaga() {
  yield call(api.get, {
    url: routes.API_GET_PRODUCTS,
    onSuccess: fetchProductsSuccess,
    onError: fetchProductsError,
  });
}

export default [
  takeEvery(FETCH_PRODUCTS, fetchProductsSaga),
];
