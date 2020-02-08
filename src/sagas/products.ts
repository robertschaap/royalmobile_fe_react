import { call, takeEvery } from 'redux-saga/effects';
import api from '../utils/api';
import routes from '../constants/routes';

import {
  Actions,
  fetchProductsSuccess,
  fetchProductsError,
} from '../ducks/products';

function* fetchProductsSaga() {
  yield call(api.get, {
    url: routes.API_GET_PRODUCTS,
    onSuccessAction: fetchProductsSuccess,
    onErrorAction: fetchProductsError,
  });
}

export default [
  takeEvery(Actions.FETCH_PRODUCTS, fetchProductsSaga),
];
