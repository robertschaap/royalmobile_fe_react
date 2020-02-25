import { call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../utils/api';
import routes from '../constants/routes';

import {
  ProductActions,
  fetchProductSuccess,
  fetchProductError,
} from '../ducks/product';

function* fetchProductsSaga(): SagaIterator {
  yield call(api.get, {
    url: routes.API_GET_PRODUCT,
    onSuccessAction: fetchProductSuccess,
    onErrorAction: fetchProductError,
  });
}

export default [
  takeEvery(ProductActions.FETCH_PRODUCT, fetchProductsSaga),
];
