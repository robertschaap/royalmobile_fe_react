import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../../utils/api';
import formatRoute from '../../utils/formatRoute';
import routes from '../../constants/routes';
import history from '../../history';

import {
  AddCartItemAction,
  addCartItemError,
  addCartItemSuccess,
  CartActions,
  DeleteCartItemAction,
  deleteCartItemError,
  deleteCartItemSuccess,
  FetchCartAction,
  fetchCartError,
  fetchCartSuccess,
  PlaceOrderAction,
  placeOrderError,
  placeOrderSuccess,
  invalidateCartCollection,
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
    url: formatRoute(routes.API_ADD_CART_ITEM, { id: cartId ?? 'new' }),
    body: { ...payload },
    onSuccessAction: addCartItemSuccess,
    onErrorAction: addCartItemError,
  });
}

function* deleteCartItemSaga({ payload, cartId }: DeleteCartItemAction): SagaIterator {
  yield call(api.delete, {
    url: formatRoute(routes.API_REMOVE_CART_ITEM, { id: cartId, itemId: payload }),
    onSuccessAction: deleteCartItemSuccess,
    onErrorAction: deleteCartItemError,
  });
}

function* placeOrderSaga({ payload: cartId }: PlaceOrderAction): SagaIterator {
  yield call(api.post, {
    url: routes.API_PLACE_ORDER,
    body: { cartId },
    onSuccessAction: placeOrderSuccess,
    onErrorAction: placeOrderError,
  });
}

function* placeOrderSuccesSaga(): SagaIterator {
  yield put(invalidateCartCollection());
  yield call(() => history.push(routes.THANK_YOU_PAGE));
}

export default [
  takeEvery(CartActions.FETCH_CART, fetchCartSaga),
  takeEvery(CartActions.ADD_CART_ITEM, addCartItemSaga),
  takeEvery(CartActions.DELETE_CART_ITEM, deleteCartItemSaga),
  takeEvery(CartActions.PLACE_ORDER, placeOrderSaga),
  takeEvery(CartActions.PLACE_ORDER_SUCCESS, placeOrderSuccesSaga),
];
