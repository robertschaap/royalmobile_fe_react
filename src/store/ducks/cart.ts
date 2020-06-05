import { StoreState } from '../reducers';
import { Cart } from '../../types/cart';

export enum CartActions {
  FETCH_CART = 'FETCH_CART',
  FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS',
  FETCH_CART_ERROR = 'FETCH_CART_ERROR',
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

export type CartActionTypes =
  | FetchCartAction
  | FetchCartSuccessAction
  | FetchCartErrorAction;

export const selectCart = (state: StoreState) => state.cart;
export const selectCartCollection = (state: StoreState) => state.cart.collection;
