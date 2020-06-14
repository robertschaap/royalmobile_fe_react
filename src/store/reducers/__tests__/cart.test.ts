import produce from 'immer';
import { cartReducer, initialCartState } from '../cart';

import {
  fetchCart,
  fetchCartSuccess,
  CartActionTypes,
  fetchCartError,
  addCartItem,
  addCartItemSuccess,
  addCartItemError,
  deleteCartItemError,
  placeOrderError,
  invalidateCartCollection,
  deleteCartItem,
  placeOrder,
  placeOrderSuccess,
  deleteCartItemSuccess,
} from '../../ducks/cart';

import { Cart, CartItem } from '../../../types/cart';

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(initialCartState, {} as CartActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle FETCH_CART', () => {
    expect(cartReducer(initialCartState, fetchCart(''))).toEqual({
      isFetching: true,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle FETCH_CART_SUCCESS', () => {
    const cart = {
      id: 'cart-id',
      items: [] as CartItem[],
      totals: {},
    } as Cart;

    expect(cartReducer(initialCartState, fetchCartSuccess(cart)).collection).toEqual(cart);
  });

  it('should handle FETCH_CART_ERROR', () => {
    expect(cartReducer(initialCartState, fetchCartError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: undefined,
    });
  });

  it('should handle ADD_CART_ITEM', () => {
    expect(cartReducer(initialCartState, addCartItem({ variantId: '', subscriptionId: '' }, ''))).toEqual({
      isFetching: true,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle ADD_CART_ITEM_SUCCESS', () => {
    const cart = {
      id: 'cart-id',
      items: [] as CartItem[],
      totals: {},
    } as Cart;

    expect(cartReducer(initialCartState, addCartItemSuccess(cart)).collection).toEqual(cart);
  });

  it('should handle ADD_CART_ITEM_ERROR', () => {
    expect(cartReducer(initialCartState, addCartItemError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: undefined,
    });
  });

  it('should handle DELETE_CART_ITEM', () => {
    expect(cartReducer(initialCartState, deleteCartItem('', ''))).toEqual({
      isFetching: true,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle DELETE_CART_ITEM_SUCCESS', () => {
    const cart = {
      id: 'cart-id',
      items: [] as CartItem[],
      totals: {},
    } as Cart;

    expect(cartReducer(initialCartState, deleteCartItemSuccess(cart))).toEqual({
      isFetching: false,
      hasError: false,
      collection: cart,
    });
  });

  it('should handle DELETE_CART_ITEM_ERROR', () => {
    expect(cartReducer(initialCartState, deleteCartItemError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: undefined,
    });
  });

  it('should handle PLACE_ORDER', () => {
    expect(cartReducer(initialCartState, placeOrder(''))).toEqual({
      isFetching: true,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle PLACE_ORDER_SUCCESS', () => {
    expect(cartReducer(initialCartState, placeOrderSuccess())).toEqual({
      isFetching: false,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle PLACE_ORDER_ERROR', () => {
    expect(cartReducer(initialCartState, placeOrderError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: undefined,
    });
  });

  it('should handle INVALIDATE_CART_COLLECTION', () => {
    const state = produce(initialCartState, (draft) => {
      draft.collection = {
        id: 'cart-id',
        items: [] as CartItem[],
        totals: {},
      } as Cart;
    });

    expect(cartReducer(state, invalidateCartCollection()).collection).toEqual(undefined);
  });
});
