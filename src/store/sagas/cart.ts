import { takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../../utils/api';
import formatRoute from '../../utils/formatRoute';
import routes from '../../constants/routes';

import {
  CartActions,
  FetchCartAction,
  fetchCartSuccess,
  fetchCartError,
} from '../ducks/cart';

function* fetchCartSaga({ payload: cartId }: FetchCartAction): SagaIterator {
  yield call(api.get, {
    url: formatRoute(routes.API_GET_CART, { id: cartId }),
    onSuccessAction: fetchCartSuccess,
    onErrorAction: fetchCartError,
  });
}

export default [
  takeEvery(CartActions.FETCH_CART, fetchCartSaga),
];
