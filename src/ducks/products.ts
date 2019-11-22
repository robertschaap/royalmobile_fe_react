import { StoreState } from '../reducers/index'

export const FETCH_PRODUCTS_COLLECTION = 'FETCH_PRODUCTS_COLLECTION';
export const FETCH_PRODUCTS_COLLECTION_SUCCESS = 'FETCH_PRODUCTS_COLLECTION_SUCCESS';
export const FETCH_PRODUCTS_COLLECTION_ERROR = 'FETCH_PRODUCTS_COLLECTION_ERROR';

export const fetchProductsCollection = () => ({
  type: FETCH_PRODUCTS_COLLECTION,
});

export const fetchProductsCollectionSuccess = (payload: any) => ({
  type: FETCH_PRODUCTS_COLLECTION_SUCCESS,
  payload,
});

export const fetchProductsCollectionError = (error: any) => ({
  type: FETCH_PRODUCTS_COLLECTION_ERROR,
  error,
});

export const getProducts = (state: StoreState) => state.products;
export const getProductsCollection = (state: StoreState) => state.products.collection;
