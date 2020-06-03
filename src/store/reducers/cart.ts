import produce from 'immer';
import { CartActionTypes } from '../ducks/cart';

interface CartState {
  isFetching: boolean;
  hasError: boolean;
  collection: {
    items: [];
  };
}

export const initialCartState: CartState = {
  isFetching: false,
  hasError: false,
  collection: {
    items: [],
  },
};

export const cartReducer = produce((draft: CartState = initialCartState, action: CartActionTypes) => {
  switch (action.type) {
    default:
      break;
  }

  return draft;
});
