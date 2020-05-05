import produce from 'immer';

import {
  ProductsActions,
  ProductsActionTypes,
} from '../ducks/products';

import { Product } from '../../types/products';

interface ProductsState {
  isFetching: boolean;
  hasError: boolean;
  collection: Product[];
  pageNumber: number;
}

export const initialProductsState: ProductsState = {
  isFetching: false,
  hasError: false,
  collection: [],
  pageNumber: 0,
};

export const productsReducer = produce((draft: ProductsState = initialProductsState, action: ProductsActionTypes) => {
  switch (action.type) {
    case ProductsActions.FETCH_PRODUCTS:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case ProductsActions.FETCH_PRODUCTS_SUCCESS:
      draft.isFetching = false;
      draft.pageNumber += 1;
      draft.collection = [...draft.collection, ...action.payload];
      break;
    case ProductsActions.FETCH_PRODUCTS_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    default:
      break;
  }

  return draft;
});
