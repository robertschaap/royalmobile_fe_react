import { cartReducer, initialCartState } from '../cart';

import {
  fetchCart,
  fetchCartSuccess,
  CartActionTypes,
  fetchCartError,
} from '../../ducks/cart';

import { Cart } from '../../../types/cart';

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

  it('should handle FETCH_CART_SUCCESS', () => {
    const cart = {
      id: 'cart-id',
      items: [],
    } as Cart;

    expect(cartReducer(initialCartState, fetchCartSuccess(cart))).toEqual({
      isFetching: false,
      hasError: false,
      collection: {
        id: 'cart-id',
        items: [],
      },
    });
  });

  it('should handle FETCH_CART_ERROR', () => {
    expect(cartReducer(initialCartState, fetchCartError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: {
        id: null,
        items: [],
      },
    });
  });
});
