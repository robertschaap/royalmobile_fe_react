/* eslint-disable import/prefer-default-export */
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

export interface Product {
  id: number;
  manufacturer: string;
  model: string;
  modelId: string;
  variants: ProductVariant[];
  specifications?: {};
}
