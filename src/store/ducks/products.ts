import { StoreState } from '../../reducers';
import { Product } from '../../types/products';

export enum ProductsActions {
  FETCH_PRODUCTS = 'FETCH_PRODUCTS',
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
}

interface FetchProductsAction {
  type: typeof ProductsActions.FETCH_PRODUCTS;
}

export const fetchProducts = (): ProductsActionTypes => ({
  type: ProductsActions.FETCH_PRODUCTS,
});

interface FetchProductsSucesssAction {
  type: typeof ProductsActions.FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export const fetchProductsSuccess = (payload: Product[]): ProductsActionTypes => ({
  type: ProductsActions.FETCH_PRODUCTS_SUCCESS,
  payload,
});

interface FetchProductsErrorAction {
  type: typeof ProductsActions.FETCH_PRODUCTS_ERROR;
  error: string;
}

export const fetchProductsError = (error: string): ProductsActionTypes => ({
  type: ProductsActions.FETCH_PRODUCTS_ERROR,
  error,
});

export type ProductsActionTypes =
  | FetchProductsAction
  | FetchProductsSucesssAction
  | FetchProductsErrorAction;

export const selectProducts = (state: StoreState) => state.products;
export const selectProductsCollection = (state: StoreState) => state.products.collection;
