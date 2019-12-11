import { StoreState } from '../reducers/index';
import { Product } from '../types/products';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
}

export const fetchProducts = (): ProductsActionTypes => ({
  type: FETCH_PRODUCTS,
});

interface FetchProductsSucesssAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export const fetchProductsSuccess = (payload: Product[]): ProductsActionTypes => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

interface FetchProductsErrorAction {
  type: typeof FETCH_PRODUCTS_ERROR;
  error: string;
}

export const fetchProductsError = (error: string): ProductsActionTypes => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export type ProductsActionTypes =
  | FetchProductsAction
  | FetchProductsSucesssAction
  | FetchProductsErrorAction;

export const getProducts = (state: StoreState) => state.products;
export const getProductsCollection = (state: StoreState) => state.products.collection;
