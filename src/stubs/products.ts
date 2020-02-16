import { Product } from '../types/products';

const defaultModelId = 'apple-iphone-x';

interface CreateProduct {
  id: number;
  modelId?: string;
}

const createProduct = (props: CreateProduct): Product => {
  const { id, modelId = defaultModelId } = props;

  return {
    id: id,
    manufacturer: 'Apple',
    model: 'iPhone X',
    modelId: modelId,
    variants: [{
      id: 1,
      variantId: `${modelId}-16gb-hotpink`,
      color: 'hotpink',
      capacity: '16gb',
      is_in_stock: true,
      is_preorder: true,
      regular_price: '265',
      discounted_price: '239',
      has_discounts: true,
    }],
  };
}

export const products: Product[] = [
  createProduct({ id: 1 }),
  createProduct({ id: 2 }),
  createProduct({ id: 3 }),
  createProduct({ id: 4 }),
  createProduct({ id: 5 }),
  createProduct({ id: 6 }),
];
