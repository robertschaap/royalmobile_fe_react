import { cartReducer, initialCartState } from '../cart';

import {
  fetchCart,
  CartActionTypes,
} from '../../ducks/cart';

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(initialCartState, {} as CartActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: {
        id: null,
        items: [],
      },
    });
  });

  it('should handle FETCH_CART', () => {
    expect(cartReducer(initialCartState, fetchCart(''))).toEqual({
      isFetching: true,
      hasError: false,
      collection: {
        id: null,
        items: [],
      },
    });
  });
});
