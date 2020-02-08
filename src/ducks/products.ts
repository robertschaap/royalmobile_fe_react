import { StoreState } from '../reducers/index';
import { Product } from '../types/products';

export enum Actions {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface FetchProductsAction {
  type: typeof Actions.FETCH_PRODUCTS;
}

export const fetchProducts = (): ProductsActionTypes => ({
  type: Actions.FETCH_PRODUCTS,
});

interface FetchProductsSucesssAction {
  type: typeof Actions.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export const fetchProductsSuccess = (payload: Product[]): ProductsActionTypes => ({
  type: Actions.FETCH_PRODUCTS_SUCCESS,
  payload,
});

interface FetchProductsErrorAction {
  type: typeof Actions.FETCH_PRODUCTS_ERROR;
  error: string;
}

export const fetchProductsError = (error: string): ProductsActionTypes => ({
  type: Actions.FETCH_PRODUCTS_ERROR,
  error,
});

export type ProductsActionTypes =
  | FetchProductsAction
  | FetchProductsSucesssAction
  | FetchProductsErrorAction;

export const selectProducts = (state: StoreState) => state.products;
export const selectProductsCollection = (state: StoreState) => state.products.collection;
