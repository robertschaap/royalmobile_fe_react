import { ProductVariant, ProductSelection } from '../types/products';
import { Subscription } from '../types/subscriptions';
import ProductUtil from '../utils/ProductUtil';
import StringUtil from '../utils/StringUtil';
import SubscriptionUtil from '../utils/SubscriptionUtil';

export interface OrderSummary {
  connectionFee: string;
  monthlyDeviceCost: string;
  monthlyDiscountTotal: string;
  monthlyPaymentTotal: string;
  oneTimeDeviceCost: string;
  oneTimeDiscountTotal: string;
  oneTimePaymentTotal: string;
  selectedSubscription: Subscription;
  selectedVariant: ProductVariant;
  shippingFee: string;
  monthlySubscriptionCost: string;
}

export const useOrderSummary = (productVariants: ProductVariant[], subscriptions: Subscription[], selection: ProductSelection): OrderSummary | null => {
  const selectedVariant = ProductUtil.getProductVariant(productVariants, selection.variantId || '');
  const selectedSubscription = SubscriptionUtil.getSubscription(subscriptions, selection.subscriptionId || '');

  if (!selectedVariant || !selectedSubscription) {
    return null;
  }

  const calculatedOneTimeDiscount = (Number(selectedVariant.regular_price) - Number(selectedVariant.discounted_price)).toString();

  return {
    // TODO: ideally not expose these as if muddles the interface of the hook
    selectedSubscription,
    selectedVariant,

    monthlySubscriptionCost: StringUtil.formatPrice(selectedSubscription.regular_price),
    connectionFee: '0,00',
    monthlyDeviceCost: '0,00',
    monthlyDiscountTotal: '0,00',
    monthlyPaymentTotal: StringUtil.formatPrice(selectedSubscription.regular_price),
    oneTimeDeviceCost: StringUtil.formatPrice(selectedVariant.regular_price),
    oneTimeDiscountTotal: StringUtil.formatPrice(calculatedOneTimeDiscount),
    oneTimePaymentTotal: StringUtil.formatPrice(selectedVariant.discounted_price),
    shippingFee: '0,00',
  };
};
