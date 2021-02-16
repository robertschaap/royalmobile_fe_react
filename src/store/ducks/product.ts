import { Product } from '../../types/products';
import { StoreState } from '../reducers';

export enum ProductActions {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS',
  FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR',
  SET_PRODUCT_SELECTED_DURATION_ID = 'SET_PRODUCT_SELECTED_DURATION_ID',
  SET_PRODUCT_SELECTED_SUBSCRIPTION_ID = 'SET_PRODUCT_SELECTED_SUBSCRIPTION_ID',
  SET_PRODUCT_SELECTED_VARIANT_ID = 'SET_PRODUCT_SELECTED_VARIANT_ID',
  INVALIDATE_PRODUCT_COLLECTION = 'INVALIDATE_PRODUCT_COLLECTION',
}

export interface FetchProductAction {
  type: typeof ProductActions.FETCH_PRODUCT;
  payload: string;
}

export const fetchProduct = (payload: string): ProductActionTypes => ({
  type: ProductActions.FETCH_PRODUCT,
  payload,
});

interface FetchProductSucesssAction {
  type: typeof ProductActions.FETCH_PRODUCT_SUCCESS;
  payload: Product;
}

export const fetchProductSuccess = (payload: Product): ProductActionTypes => ({
  type: ProductActions.FETCH_PRODUCT_SUCCESS,
  payload,
});

interface FetchProductErrorAction {
  type: typeof ProductActions.FETCH_PRODUCT_ERROR;
  error: string;
}

export const fetchProductError = (error: string): ProductActionTypes => ({
  type: ProductActions.FETCH_PRODUCT_ERROR,
  error,
});

interface SetProductSelectedDurationIdAction {
  type: typeof ProductActions.SET_PRODUCT_SELECTED_DURATION_ID;
  payload: string;
}

export const setProductSelectedDurationId = (payload: string): ProductActionTypes => ({
  type: ProductActions.SET_PRODUCT_SELECTED_DURATION_ID,
  payload,
});

interface SetProductSelectedSubscriptionIdAction {
  type: typeof ProductActions.SET_PRODUCT_SELECTED_SUBSCRIPTION_ID;
  payload: string;
}

export const setProductSelectedSubscriptionId = (payload: string): ProductActionTypes => ({
  type: ProductActions.SET_PRODUCT_SELECTED_SUBSCRIPTION_ID,
  payload,
});

interface SetProductSelectedVariantIdAction {
  type: typeof ProductActions.SET_PRODUCT_SELECTED_VARIANT_ID;
  payload: string;
}

export const setProductSelectedVariantId = (payload: string): ProductActionTypes => ({
  type: ProductActions.SET_PRODUCT_SELECTED_VARIANT_ID,
  payload,
});

interface InvalidateProductCollectionAction {
  type: typeof ProductActions.INVALIDATE_PRODUCT_COLLECTION;
}

export const invalidateProductCollection = (): ProductActionTypes => ({
  type: ProductActions.INVALIDATE_PRODUCT_COLLECTION,
});

export type ProductActionTypes =
  | FetchProductAction
  | FetchProductSucesssAction
  | FetchProductErrorAction
  | SetProductSelectedDurationIdAction
  | SetProductSelectedSubscriptionIdAction
  | SetProductSelectedVariantIdAction
  | InvalidateProductCollectionAction;

export const selectProduct = (state: StoreState) => state.product;
export const selectProductSelection = (state: StoreState) => state.product.selection;
