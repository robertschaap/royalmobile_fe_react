export interface Product {
  id: number;
  manufacturer: string;
  model: string;
  modelId: string;
  variants: Array<{
    id: number;
    variantId: string;
    color: string;
    capacity: string;
    is_in_stock: boolean;
    is_preorder: boolean;
    regular_price: string;
    discounted_price: string;
    has_discounts: boolean;
  }>;
  specifications?: {},
}

export const productsStub: Product[] = [{
  id: 1,
  manufacturer: "Apple",
  model: "iPhone X",
  modelId: "apple-iphone-x",
  variants: [{
    id: 1,
    variantId: "apple-iphone-x-16gb-hotpink",
    color: "hotpink",
    capacity: "16gb",
    is_in_stock: true,
    is_preorder: true,
    regular_price: "265",
    discounted_price: "239",
    has_discounts: true,
  }],
}];
