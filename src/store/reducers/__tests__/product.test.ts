import { productReducer } from '../product';

import {
  fetchProduct,
  fetchProductSuccess,
  fetchProductError,
  ProductActionTypes,
} from '../../ducks/product';

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, {} as ProductActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
    });
  });

  it('should handle FETCH_PRODUCT', () => {
    expect(productReducer(undefined, fetchProduct())).toEqual({
      isFetching: true,
      hasError: false,
      collection: null,
    });
  });

  it('should handle FETCH_PRODUCT_SUCCESS', () => {
    expect(productReducer(undefined, fetchProductSuccess([]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: undefined,
    });
  });

  it('should handle FETCH_PRODUCT_ERROR', () => {
    expect(productReducer(undefined, fetchProductError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: null,
    });
  });
});
