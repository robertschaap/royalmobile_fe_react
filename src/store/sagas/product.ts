import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import routes from '../../constants/routes';
import api from '../../utils/api';
import formatRoute from '../../utils/formatRoute';
import {
  ProductActions,
  fetchProductSuccess,
  fetchProductError,
  FetchProductAction,
} from '../ducks/product';

function* fetchProductsSaga({ payload: productId }: FetchProductAction): SagaIterator {
  yield call(api.get, {
    url: formatRoute(routes.API_GET_PRODUCT, { id: productId }),
    onSuccessAction: fetchProductSuccess,
    onErrorAction: fetchProductError,
  });
}

export default [
  takeEvery(ProductActions.FETCH_PRODUCT, fetchProductsSaga),
];
