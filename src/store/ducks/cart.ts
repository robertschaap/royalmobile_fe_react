import { Cart } from '../../types/cart';
import { StoreState } from '../reducers';

export enum CartActions {
  FETCH_CART = 'FETCH_CART',
  FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
  FETCH_CART_ERROR = 'FETCH_CART_ERROR',

  ADD_CART_ITEM = 'ADD_CART_ITEM',
  ADD_CART_ITEM_SUCCESS = 'ADD_CART_ITEM_SUCCESS',
  ADD_CART_ITEM_ERROR = 'ADD_CART_ITEM_ERROR',

  DELETE_CART_ITEM = 'DELETE_CART_ITEM',
  DELETE_CART_ITEM_SUCCESS = 'DELETE_CART_ITEM_SUCCESS',
  DELETE_CART_ITEM_ERROR = 'DELETE_CART_ITEM_ERROR',

  PLACE_ORDER = 'PLACE_ORDER',
  PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS',
  PLACE_ORDER_ERROR = 'PLACE_ORDER_ERROR',

  INVALIDATE_CART_COLLECTION = 'INVALIDATE_CART_COLLECTION',
}

export interface FetchCartAction {
  type: typeof CartActions.FETCH_CART;
  payload: string;
}

export const fetchCart = (payload: string): CartActionTypes => ({
  type: CartActions.FETCH_CART,
  payload,
});

interface FetchCartSuccessAction {
  type: CartActions.FETCH_CART_SUCCESS;
  payload: Cart;
}

export const fetchCartSuccess = (payload: Cart): CartActionTypes => ({
  type: CartActions.FETCH_CART_SUCCESS,
  payload,
});

interface FetchCartErrorAction {
  type: CartActions.FETCH_CART_ERROR;
  error: string;
}

export const fetchCartError = (error: string): CartActionTypes => ({
  type: CartActions.FETCH_CART_ERROR,
  error,
});

export interface AddCartItemAction {
  type: typeof CartActions.ADD_CART_ITEM;
  cartId?: string;
  payload: {
    variantId: string;
    subscriptionId: string;
  };
}

export const addCartItem = (payload: AddCartItemAction['payload'], cartId?: string): CartActionTypes => ({
  type: CartActions.ADD_CART_ITEM,
  cartId,
  payload,
});

interface AddCartItemSuccessAction {
  type: CartActions.ADD_CART_ITEM_SUCCESS;
  payload: Cart;
}

export const addCartItemSuccess = (payload: Cart): CartActionTypes => ({
  type: CartActions.ADD_CART_ITEM_SUCCESS,
  payload,
});

interface AddCartItemErrorAction {
  type: CartActions.ADD_CART_ITEM_ERROR;
  error: string;
}

export const addCartItemError = (error: string): CartActionTypes => ({
  type: CartActions.ADD_CART_ITEM_ERROR,
  error,
});

export interface DeleteCartItemAction {
  type: typeof CartActions.DELETE_CART_ITEM;
  cartId: string;
  payload: string;
}

export const deleteCartItem = (payload: string, cartId: string): CartActionTypes => ({
  type: CartActions.DELETE_CART_ITEM,
  cartId,
  payload,
});

interface DeleteCartItemSuccessAction {
  type: CartActions.DELETE_CART_ITEM_SUCCESS;
  payload: Cart;
}

export const deleteCartItemSuccess = (payload: Cart): CartActionTypes => ({
  type: CartActions.DELETE_CART_ITEM_SUCCESS,
  payload,
});

interface DeleteCartItemErrorAction {
  type: CartActions.DELETE_CART_ITEM_ERROR;
  error: string;
}

export const deleteCartItemError = (error: string): CartActionTypes => ({
  type: CartActions.DELETE_CART_ITEM_ERROR,
  error,
});

export interface PlaceOrderAction {
  type: CartActions.PLACE_ORDER;
  payload: string;
}

export const placeOrder = (payload: string): CartActionTypes => ({
  type: CartActions.PLACE_ORDER,
  payload,
});

interface PlaceOrderSuccessAction {
  type: CartActions.PLACE_ORDER_SUCCESS;
}

export const placeOrderSuccess = (): CartActionTypes => ({
  type: CartActions.PLACE_ORDER_SUCCESS,
});

interface PlaceOrderErrorAction {
  type: CartActions.PLACE_ORDER_ERROR;
  error: string;
}

export const placeOrderError = (error: string): CartActionTypes => ({
  type: CartActions.PLACE_ORDER_ERROR,
  error,
});

interface InvalidateCartCollectionAction {
  type: CartActions.INVALIDATE_CART_COLLECTION;
}

export const invalidateCartCollection = (): CartActionTypes => ({
  type: CartActions.INVALIDATE_CART_COLLECTION,
});

export type CartActionTypes =
  | FetchCartAction
  | FetchCartSuccessAction
  | FetchCartErrorAction
  | AddCartItemAction
  | AddCartItemSuccessAction
  | AddCartItemErrorAction
  | DeleteCartItemAction
  | DeleteCartItemSuccessAction
  | DeleteCartItemErrorAction
  | PlaceOrderAction
  | PlaceOrderSuccessAction
  | PlaceOrderErrorAction
  | InvalidateCartCollectionAction;

export const selectCart = (state: StoreState) => state.cart;
export const selectCartCollection = (state: StoreState) => state.cart.collection;
