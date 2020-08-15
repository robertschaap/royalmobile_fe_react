export interface Product {
  id: number;
  manufacturer: string;
  model: string;
  modelId: string;
  variants: ProductVariant[];
  specifications?: Record<string, unknown>;
}

export interface ProductVariant {
  id: number;
  variantId: string;
  color: string;
  colorHex: string;
  capacity: string;
  is_in_stock: boolean;
  is_preorder: boolean;
  regular_price: string;
  discounted_price: string;
  has_discounts: boolean;
}

export type ProductColor = Pick<ProductVariant, 'color' | 'colorHex'> & {
  variantId: string;
};

export type ProductCapacity = Pick<ProductVariant, 'capacity'> & {
  variantId: string;
};

export interface ProductSelection {
  durationId: string | null;
  paymentPlanId: string | null;
  subscriptionId: string | null;
  variantId: string | null;
}
