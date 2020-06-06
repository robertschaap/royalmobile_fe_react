import { takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../../utils/api';
import formatRoute from '../../utils/formatRoute';
import routes from '../../constants/routes';

import {
  addCartItemError,
  addCartItemSuccess,
  AddCartItemAction,
  CartActions,
  FetchCartAction,
  fetchCartError,
  fetchCartSuccess,
} from '../ducks/cart';

function* fetchCartSaga({ payload: cartId }: FetchCartAction): SagaIterator {
  yield call(api.get, {
    url: formatRoute(routes.API_GET_CART, { id: cartId }),
    onSuccessAction: fetchCartSuccess,
    onErrorAction: fetchCartError,
  });
}

function* addCartItemSaga({ payload, cartId }: AddCartItemAction): SagaIterator {
  yield call(api.patch, {
    url: routes.API_ADD_CART_ITEM,
    body: { ...payload, cartId },
    onSuccessAction: addCartItemSuccess,
    onErrorAction: addCartItemError,
  });
}

export default [
  takeEvery(CartActions.FETCH_CART, fetchCartSaga),
  takeEvery(CartActions.ADD_CART_ITEM, addCartItemSaga),
];
