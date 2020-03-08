import produce from 'immer';

import {
  ProductActions,
  ProductActionTypes,
} from '../ducks/product';

import { Product } from '../../types/products';

interface ProductState {
  isFetching: boolean;
  hasError: boolean;
  collection: Product | null;
}

export const initialProductState: ProductState = {
  isFetching: false,
  hasError: false,
  collection: null,
}

export const productReducer = (state: ProductState = initialProductState, action: ProductActionTypes) => {
  return produce<ProductState>(state, (newState) => {
    switch (action.type) {
      case ProductActions.FETCH_PRODUCT:
        newState.isFetching = true;
        newState.hasError = false;
        break;
      case ProductActions.FETCH_PRODUCT_SUCCESS:
        newState.isFetching = false;
        newState.collection = action.payload;
        break;
      case ProductActions.FETCH_PRODUCT_ERROR:
        newState.isFetching = false;
        newState.hasError = true;
        break;
      default:
        break;
    }

    return newState;
  });
}
