import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
  ProductsActionTypes,
} from '../../ducks/products';
import { productsReducer, initialProductsState } from '../products';

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(productsReducer(initialProductsState, {} as ProductsActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
      pageNumber: 0,
    });
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(productsReducer(initialProductsState, fetchProducts(0))).toEqual({
      isFetching: true,
      hasError: false,
      collection: [],
      pageNumber: 0,
    });
  });

  it('should handle FETCH_PRODUCTS_SUCCESS', () => {
    expect(productsReducer(initialProductsState, fetchProductsSuccess([]))).toEqual({
      isFetching: false,
      hasError: false,
      collection: [],
      pageNumber: 1,
    });
  });

  it('should handle FETCH_PRODUCTS_ERROR', () => {
    expect(productsReducer(initialProductsState, fetchProductsError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: [],
      pageNumber: 0,
    });
  });
});
