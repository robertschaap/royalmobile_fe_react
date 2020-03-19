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
  selection: {
    durationId: string | null;
    paymentPlanId: string | null;
    subscriptionId: string | null;
    variantId: string | null;
  };
}

export const initialProductState: ProductState = {
  isFetching: false,
  hasError: false,
  collection: null,
  selection: {
    durationId: null,
    paymentPlanId: null,
    subscriptionId: null,
    variantId: null,
  },
};

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
      case ProductActions.SET_PRODUCT_SELECTED_DURATION_ID:
        newState.selection.durationId = action.payload;
        break;
      case ProductActions.SET_PRODUCT_SELECTED_PAYMENTPLAN_ID:
        newState.selection.paymentPlanId = action.payload;
        break;
      case ProductActions.SET_PRODUCT_SELECTED_SUBSCRIPTION_ID:
        newState.selection.subscriptionId = action.payload;
        break;
      case ProductActions.SET_PRODUCT_SELECTED_VARIANT_ID:
        newState.selection.variantId = action.payload;
        break;
      default:
        break;
    }

    return newState;
  });
};
