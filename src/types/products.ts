export interface IfcProduct {
  id: number;
  model: string;
  manufacturer: string;
  variants: Array<{
    id: number;
    device_color: string;
    device_capacity: string;
    is_in_stock: boolean;
    is_preorder: boolean;
    regular_price: string;
    discounted_price: string;
    has_discounts: boolean;
  }>;
}

export const productsStub: Array<IfcProduct> = [{
  id: 1,
  model: "iPhone X",
  manufacturer: "Apple",
  variants: [{
    id: 1,
    device_color: "hotpink",
    device_capacity: "16gb",
    is_in_stock: true,
    is_preorder: true,
    regular_price: "265",
    discounted_price: "239",
    has_discounts: true,
  }],
}];
