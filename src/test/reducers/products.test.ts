import { productsReducer } from '../../reducers/products';

import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
  ProductsActionTypes,
} from '../../ducks/products';

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(undefined, {} as ProductsActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(productsReducer(undefined, fetchProducts())).toEqual({
      isFetching: true,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(productsReducer(undefined, fetchProductsSuccess([]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
    });
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(productsReducer(undefined, fetchProductsError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: [],
    });
  });
});
