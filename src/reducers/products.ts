import produce from 'immer';

import {
  FETCH_PRODUCTS_COLLECTION,
  FETCH_PRODUCTS_COLLECTION_SUCCESS,
  FETCH_PRODUCTS_COLLECTION_ERROR,
} from '../ducks/products';

import { Product, productsStub } from '../types/products';

interface ProductsState {
  isFetching: boolean;
  hasError: boolean;
  collection: Product[];
}

const initialState: ProductsState = {
  isFetching: false,
  hasError: false,
  collection: [],
};

const products = (state = initialState, action: any) => {
  return produce(state, newState => {
    switch (action.type) {
      case FETCH_PRODUCTS_COLLECTION:
        newState.isFetching = true;
        newState.hasError = false;
        break;
      case FETCH_PRODUCTS_COLLECTION_SUCCESS:
        newState.isFetching = false;
        newState.collection = action.payload;
        break;
      case FETCH_PRODUCTS_COLLECTION_ERROR:
        newState.isFetching = false;
        newState.hasError = true;
        break;
      default:
        // TODO: remove when backend is implemented
        newState.collection = Array.from({ length: 12 }, (_, i) => i).map(e => ({
          ...productsStub[0],
          id: e,
        }));;
        break;
    }

    return newState;
  });
};

export default products;

