import produce from 'immer';

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from '../ducks/products';

import { Product } from '../types/products';

interface ProductsState {
  isFetching: boolean;
  hasError: boolean;
  collection: Product[];
}

export const initialProductsState: ProductsState = {
  isFetching: false,
  hasError: false,
  collection: [],
};

export const productsReducer = (state = initialProductsState, action: any) => {
  return produce(state, newState => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        newState.isFetching = true;
        newState.hasError = false;
        break;
      case FETCH_PRODUCTS_SUCCESS:
        newState.isFetching = false;
        newState.collection = [...state.collection, ...action.payload];
        break;
      case FETCH_PRODUCTS_ERROR:
        newState.isFetching = false;
        newState.hasError = true;
        break;
      default:
        break;
    }

    return newState;
  });
};
