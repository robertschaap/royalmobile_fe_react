import { StoreState } from '../reducers/index'

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = (payload: any) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload,
});

export const fetchProductsError = (error: any) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export const getProducts = (state: StoreState) => state.products;
export const getProductsCollection = (state: StoreState) => state.products.collection;
