export interface Product {
  id: number;
  model: string;
  manufacturer: string;
  variants: Array<{
    id: number;
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
  model: "iPhone X",
  manufacturer: "Apple",
  variants: [{
    id: 1,
    color: "hotpink",
    capacity: "16gb",
    is_in_stock: true,
    is_preorder: true,
    regular_price: "265",
    discounted_price: "239",
    has_discounts: true,
  }],
}];
