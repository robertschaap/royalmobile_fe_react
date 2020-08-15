import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import routes from '../../constants/routes';
import api from '../../utils/api';
import {
  ProductsActions,
  fetchProductsSuccess,
  fetchProductsError,
  FetchProductsAction,
} from '../ducks/products';

function* fetchProductsSaga({ payload: page }: FetchProductsAction): SagaIterator {
  yield call(api.get, {
    url: `${routes.API_GET_PRODUCTS}?page=${page + 1}`,
    onSuccessAction: fetchProductsSuccess,
    onErrorAction: fetchProductsError,
  });
}

export default [
  takeEvery(ProductsActions.FETCH_PRODUCTS, fetchProductsSaga),
];
