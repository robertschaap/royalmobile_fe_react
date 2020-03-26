import { productsReducer } from '../products';

import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
  ProductsActionTypes,
} from '../../ducks/products';

const initialState = {
  isFetching: false,
  hasError: false,
  collection: [],
  pageNumber: 0,
};

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(initialState, {} as ProductsActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
      pageNumber: 0,
    });
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(productsReducer(initialState, fetchProducts())).toEqual({
      isFetching: true,
      hasError: false,
      collection: [],
      pageNumber: 0,
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(productsReducer(initialState, fetchProductsSuccess([]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
      pageNumber: 1,
    });
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(productsReducer(initialState, fetchProductsError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: [],
      pageNumber: 0,
    });
  });
});
