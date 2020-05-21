import { productReducer, initialProductState } from '../product';

import {
  fetchProduct,
  fetchProductSuccess,
  fetchProductError,
  setProductSelectedDurationId,
  setProductSelectedPaymentPlanId,
  setProductSelectedSubscriptionId,
  setProductSelectedVariantId,
  ProductActionTypes,
} from '../../ducks/product';

import { Product } from '../../../types/products';

describe('Products Reducer', () => {
  it('should return the initial state', () => {
    expect(productReducer(initialProductState, {} as ProductActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle FETCH_PRODUCT', () => {
    expect(productReducer(initialProductState, fetchProduct())).toEqual({
      isFetching: true,
      hasError: false,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle FETCH_PRODUCT_SUCCESS', () => {
    expect(productReducer(initialProductState, fetchProductSuccess({} as Product))).toEqual({
      isFetching: false,
      hasError: false,
      collection: {},
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle FETCH_PRODUCT_ERROR', () => {
    expect(productReducer(initialProductState, fetchProductError('error'))).toEqual({
      isFetching: false,
      hasError: true,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle SET_PRODUCT_SELECTED_DURATION_ID', () => {
    expect(productReducer(initialProductState, setProductSelectedDurationId('duration_id-1'))).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
      selection: {
        durationId: 'duration_id-1',
        paymentPlanId: null,
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle SET_PRODUCT_SELECTED_PAYMENTPLAN_ID', () => {
    expect(productReducer(initialProductState, setProductSelectedPaymentPlanId('payment_plan_id-1'))).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: 'payment_plan_id-1',
        subscriptionId: null,
        variantId: null,
      },
    });
  });

  it('should handle SET_PRODUCT_SELECTED_SUBSCRIPTION_ID', () => {
    expect(productReducer(initialProductState, setProductSelectedSubscriptionId('subscription_id-1'))).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: 'subscription_id-1',
        variantId: null,
      },
    });
  });

  it('should handle SET_PRODUCT_SELECTED_VARIANT_ID', () => {
    expect(productReducer(initialProductState, setProductSelectedVariantId('variant_id-1'))).toEqual({
      isFetching: false,
      hasError: false,
      collection: null,
      selection: {
        durationId: null,
        paymentPlanId: null,
        subscriptionId: null,
        variantId: 'variant_id-1',
      },
    });
  });
});
