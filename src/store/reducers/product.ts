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

const initialProductState: ProductState = {
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

export const productReducer = produce((draft: ProductState = initialProductState, action: ProductActionTypes) => {
  switch (action.type) {
    case ProductActions.FETCH_PRODUCT:
      draft.isFetching = true;
      draft.hasError = false;
      break;
    case ProductActions.FETCH_PRODUCT_SUCCESS:
      draft.isFetching = false;
      draft.collection = action.payload;
      break;
    case ProductActions.FETCH_PRODUCT_ERROR:
      draft.isFetching = false;
      draft.hasError = true;
      break;
    case ProductActions.SET_PRODUCT_SELECTED_DURATION_ID:
      draft.selection.durationId = action.payload;
      break;
    case ProductActions.SET_PRODUCT_SELECTED_PAYMENTPLAN_ID:
      draft.selection.paymentPlanId = action.payload;
      break;
    case ProductActions.SET_PRODUCT_SELECTED_SUBSCRIPTION_ID:
      draft.selection.subscriptionId = action.payload;
      break;
    case ProductActions.SET_PRODUCT_SELECTED_VARIANT_ID:
      draft.selection.variantId = action.payload;
      break;
    default:
      break;
  }

  return draft;
});
