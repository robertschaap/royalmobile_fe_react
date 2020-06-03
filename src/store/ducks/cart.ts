export enum CartActions {
  FETCH_CART = 'FETCH_CART',
}

export interface FetchCartAction {
  type: typeof CartActions.FETCH_CART;
  payload: string;
}

export const fetchCart = (payload: string): FetchCartAction => ({
  type: CartActions.FETCH_CART,
  payload,
});

export type CartActionTypes =
  | FetchCartAction;
