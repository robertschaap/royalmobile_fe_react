import { call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../utils/api';
import routes from '../constants/routes';

import {
  ProductsActions,
  fetchProductsSuccess,
  fetchProductsError,
} from '../store/ducks/products';

function* fetchProductsSaga(): SagaIterator {
  yield call(api.get, {
    url: routes.API_GET_PRODUCTS,
    onSuccessAction: fetchProductsSuccess,
    onErrorAction: fetchProductsError,
  });
}

export default [
  takeEvery(ProductsActions.FETCH_PRODUCTS, fetchProductsSaga),
];
