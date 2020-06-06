import produce from 'immer';
import { CartActionTypes, CartActions } from '../ducks/cart';
import { Cart } from '../../types/cart';

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
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case CartActions.FETCH_CART_SUCCESS:
      draft.isFetching = false;
      draft.collection = action.payload;
      break;
    case CartActions.FETCH_CART_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    default:
      break;
  }

  return draft;
});
