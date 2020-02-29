import produce from 'immer';

import {
  ProductsActions,
  ProductsActionTypes,
} from '../store/ducks/products';

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

export const productsReducer = (state: ProductsState = initialProductsState, action: ProductsActionTypes) => {
  return produce<ProductsState>(state, (newState) => {
    switch (action.type) {
      case ProductsActions.FETCH_PRODUCTS:
        newState.isFetching = true;
        newState.hasError = false;
        break;
      case ProductsActions.FETCH_PRODUCTS_SUCCESS:
        newState.isFetching = false;
        newState.collection = [...state.collection, ...action.payload];
        break;
      case ProductsActions.FETCH_PRODUCTS_ERROR:
        newState.isFetching = false;
        newState.hasError = true;
        break;
      default:
        break;
    }

    return newState;
  });
};
