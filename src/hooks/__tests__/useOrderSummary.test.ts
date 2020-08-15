import { renderHook } from '@testing-library/react-hooks';

import { ProductSelection, ProductVariant } from '../../types/products';
import { Subscription } from '../../types/subscriptions';
import { useOrderSummary } from '../useOrderSummary';

const variant = {
  variantId: 'variant-id',
  regular_price: '2',
  discounted_price: '1',
} as ProductVariant;

const subscription = {
  subscriptionId: 'subscription-id',
  regular_price: '2',
} as Subscription;

describe('useOrderSummary', () => {
  it('should return null if no selected variant can be found', () => {
    const { result: result1 } = renderHook(() => useOrderSummary([variant], [subscription], {} as ProductSelection));
    expect(result1.current).toBeNull();

    const { result: result2 } = renderHook(() => useOrderSummary([], [subscription], {} as ProductSelection));
    expect(result2.current).toBeNull();
  });

  it('should return null if no selected subscription can be found', () => {
    const { result: result1 } = renderHook(() => useOrderSummary([variant], [subscription], {} as ProductSelection));
    expect(result1.current).toBeNull();

    const { result: result2 } = renderHook(() => useOrderSummary([variant], [], {} as ProductSelection));
    expect(result2.current).toBeNull();
  });

  it('should return an order summary', () => {
    const selection = { variantId: 'variant-id', subscriptionId: 'subscription-id' } as ProductSelection;
    const { result } = renderHook(() => useOrderSummary([variant], [subscription], selection));

    expect(result.current).toEqual({
      selectedSubscription: subscription,
      selectedVariant: variant,

      monthlySubscriptionCost: '2,00',
      connectionFee: '0,00',
      monthlyDeviceCost: '0,00',
      monthlyDiscountTotal: '0,00',
      monthlyPaymentTotal: '2,00',
      oneTimeDeviceCost: '2,00',
      oneTimeDiscountTotal: '1,00',
      oneTimePaymentTotal: '1,00',
      shippingFee: '0,00',
    });
  });
});
