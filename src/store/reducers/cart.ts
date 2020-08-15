import produce from 'immer';

import { Cart } from '../../types/cart';
import { CartActionTypes, CartActions } from '../ducks/cart';

interface CartState {
  isFetching: boolean;
  hasError: boolean;
  collection?: Cart;
}

export const initialCartState: CartState = {
  isFetching: false,
  hasError: false,
  collection: undefined,
};

export const cartReducer = produce((draft: CartState = initialCartState, action: CartActionTypes) => {
  switch (action.type) {
    case CartActions.FETCH_CART:
    case CartActions.ADD_CART_ITEM:
    case CartActions.DELETE_CART_ITEM:
    case CartActions.PLACE_ORDER:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case CartActions.FETCH_CART_SUCCESS:
    case CartActions.ADD_CART_ITEM_SUCCESS:
    case CartActions.DELETE_CART_ITEM_SUCCESS:
      draft.isFetching = false;
      draft.collection = action.payload;
      break;
    case CartActions.PLACE_ORDER_SUCCESS:
      draft.isFetching = false;
      break;
    case CartActions.FETCH_CART_ERROR:
    case CartActions.ADD_CART_ITEM_ERROR:
    case CartActions.DELETE_CART_ITEM_ERROR:
    case CartActions.PLACE_ORDER_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    case CartActions.INVALIDATE_CART_COLLECTION:
      draft.collection = undefined;
      break;
    default:
      break;
  }

  return draft;
});
