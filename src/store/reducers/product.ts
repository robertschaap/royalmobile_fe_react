import produce from 'immer';

import { Product, ProductSelection } from '../../types/products';
import {
  ProductActions,
  ProductActionTypes,
} from '../ducks/product';

interface ProductState {
  isFetching: boolean;
  hasError: boolean;
  collection: Product | null;
  selection: ProductSelection;
}

const initialProductSelection = {
  durationId: null,
  paymentPlanId: null,
  subscriptionId: null,
  variantId: null,
};

export const initialProductState: ProductState = {
  isFetching: false,
  hasError: false,
  collection: null,
  selection: initialProductSelection,
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
    case ProductActions.INVALIDATE_PRODUCT_COLLECTION:
      draft.collection = null;
      draft.selection = initialProductSelection;
      break;
    default:
      break;
  }

  return draft;
});
