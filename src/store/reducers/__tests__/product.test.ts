import { productReducer } from '../product';

import {
  fetchProduct,
  fetchProductSuccess,
  fetchProductError,
  ProductActionTypes,
} from '../../ducks/product';

import { Product } from '../../../types/products';

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
    expect(productReducer(undefined, fetchProductSuccess({} as Product))).toEqual({
      isFetching: false,
      hasError: false,
      collection: {},
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
