import { Product } from '../types/products';

const product: Product = {
  id: 1,
  manufacturer: 'Apple',
  model: 'iPhone X',
  modelId: 'apple-iphone-x',
  variants: [{
    id: 1,
    variantId: 'apple-iphone-x-16gb-hotpink',
    color: 'hotpink',
    capacity: '16gb',
    is_in_stock: true,
    is_preorder: true,
    regular_price: '265',
    discounted_price: '239',
    has_discounts: true,
  }],
};

export const products: Product[] = [
  { ...product, id: 1 },
  { ...product, id: 2 },
  { ...product, id: 3 },
  { ...product, id: 4 },
  { ...product, id: 5 },
  { ...product, id: 6 },
];
