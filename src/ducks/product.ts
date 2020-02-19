import { StoreState } from '../reducers';
import { Product } from '../types/products';

export enum Actions {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
}

interface FetchProductAction {
  type: typeof Actions.FETCH_PRODUCT;
}

export const fetchProduct = (): ProductActionTypes => ({
  type: Actions.FETCH_PRODUCT,
});

interface FetchProductSucesssAction {
  type: typeof Actions.FETCH_PRODUCT_SUCCESS;
  payload: Product[];
}

export const fetchProductSuccess = (payload: Product[]): ProductActionTypes => ({
  type: Actions.FETCH_PRODUCT_SUCCESS,
  payload,
});

interface FetchProductErrorAction {
  type: typeof Actions.FETCH_PRODUCT_ERROR;
  error: string;
}

export const fetchProductError = (error: string): ProductActionTypes => ({
  type: Actions.FETCH_PRODUCT_ERROR,
  error,
});

export type ProductActionTypes =
  | FetchProductAction
  | FetchProductSucesssAction
  | FetchProductErrorAction;

export const selectProduct = (state: StoreState) => state.product;
export const selectProductCollection = (state: StoreState) => state.product.collection;
