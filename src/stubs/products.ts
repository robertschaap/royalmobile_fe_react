import { Product, ProductVariant } from '../types/products';

const defaultModelId = 'apple-iphone-x';

interface CreateProductVariant {
  id: number
  modelId?: string;
  capacity: string;
  color: string;
}

const createProductVariant = (props: CreateProductVariant) => {
  const { id, modelId = defaultModelId, capacity, color } = props;

  return {
    id: id,
    variantId: `${modelId}-${capacity}-${color}`,
    color: color,
    capacity: capacity,
    is_in_stock: true,
    is_preorder: true,
    regular_price: '265',
    discounted_price: '239',
    has_discounts: true,
  };
};

interface CreateProduct {
  id: number;
  modelId?: string;
  variants?: ProductVariant[],
}

const createProduct = (props: CreateProduct): Product => {
  const { id, modelId = defaultModelId, variants = [] } = props;

  return {
    id: id,
    manufacturer: 'Apple',
    model: 'iPhone X',
    modelId: modelId,
    variants: [
      createProductVariant({
        id: 1,
        capacity: '16gb',
        color: 'hotpink',
      }),
    ],
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
