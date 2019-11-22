import produce from 'immer';

import {
  FETCH_PRODUCTS_COLLECTION,
  FETCH_PRODUCTS_COLLECTION_SUCCESS,
  FETCH_PRODUCTS_COLLECTION_ERROR,
} from '../ducks/products';

import { Product, productsStub } from '../types/products';

// TODO: remove when backend is implemented
const fakeProductListing = Array.from({ length: 12 }, (_, i) => i).map(e => ({
  ...productsStub[0],
  id: e,
}));

interface ProductsState {
  isFetching: boolean;
  collection: Product[];
}

const initialState: ProductsState = {
  isFetching: false,
  collection: [],
};

const products = (state = initialState, action: any) => {
  return produce(state, newState => {
    switch (action.type) {
      case FETCH_PRODUCTS_COLLECTION:
        newState.isFetching = true;
        break;
      case FETCH_PRODUCTS_COLLECTION_SUCCESS:
        newState.isFetching = false;
        break;
      case FETCH_PRODUCTS_COLLECTION_ERROR:
        newState.isFetching = false;
        break;
      default:
        newState.collection = fakeProductListing;
        break;
    }

    return newState;
  });
};

export default products;

