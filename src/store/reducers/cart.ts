import produce from 'immer';
import { CartActionTypes, CartActions } from '../ducks/cart';

interface CartState {
  isFetching: boolean;
  hasError: boolean;
  collection: {
    id: string | null;
    items: [];
  };
}

export const initialCartState: CartState = {
  isFetching: false,
  hasError: false,
  collection: {
    id: null,
    items: [],
  },
};

export const cartReducer = produce((draft: CartState = initialCartState, action: CartActionTypes) => {
  switch (action.type) {
    case CartActions.FETCH_CART:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    default:
      break;
  }

  return draft;
});
