import { Product, ProductVariant } from '../types/products';

const defaultModelId = 'apple-iphonex';

interface CreateProductVariant {
  id: number;
  modelId?: string;
  capacity: string;
  colorId: string;
  colorHex: string;
}

const createProductVariant = (props: CreateProductVariant): ProductVariant => {
  const { id, modelId = defaultModelId, capacity, colorId, colorHex } = props;

  return {
    id: id,
    variantId: `${modelId}-${capacity}-${colorId}`,
    color: colorId,
    colorHex: colorHex,
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
}

const createProduct = (props: CreateProduct): Product => {
  const { id, modelId = defaultModelId } = props;

  return {
    id: id,
    manufacturer: 'Apple',
    model: 'iPhone X',
    modelId: modelId,
    variants: [
      createProductVariant({ id: 1, capacity: '16gb', colorId: 'lime', colorHex: '#7ec09a' }),
      createProductVariant({ id: 2, capacity: '16gb', colorId: 'purple', colorHex: '#8097c2' }),
      createProductVariant({ id: 3, capacity: '16gb', colorId: 'green', colorHex: '#bae596' }),
      createProductVariant({ id: 4, capacity: '16gb', colorId: 'pink', colorHex: '#d59a8d' }),

      createProductVariant({ id: 5, capacity: '32gb', colorId: 'lime', colorHex: '#7ec09a' }),
      createProductVariant({ id: 6, capacity: '32gb', colorId: 'purple', colorHex: '#8097c2' }),
      createProductVariant({ id: 7, capacity: '32gb', colorId: 'green', colorHex: '#bae596' }),
      createProductVariant({ id: 8, capacity: '32gb', colorId: 'pink', colorHex: '#d59a8d' }),

      createProductVariant({ id: 9, capacity: '64gb', colorId: 'lime', colorHex: '#7ec09a' }),
      createProductVariant({ id: 10, capacity: '64gb', colorId: 'purple', colorHex: '#8097c2' }),
      createProductVariant({ id: 11, capacity: '64gb', colorId: 'green', colorHex: '#bae596' }),
      createProductVariant({ id: 12, capacity: '64gb', colorId: 'pink', colorHex: '#d59a8d' }),

      createProductVariant({ id: 13, capacity: '128gb', colorId: 'lime', colorHex: '#7ec09a' }),
      createProductVariant({ id: 14, capacity: '128gb', colorId: 'purple', colorHex: '#8097c2' }),
      createProductVariant({ id: 15, capacity: '128gb', colorId: 'green', colorHex: '#bae596' }),
      createProductVariant({ id: 16, capacity: '128gb', colorId: 'pink', colorHex: '#d59a8d' }),
    ],
  };
};

export const products: Product[] = [
  createProduct({ id: 1 }),
  createProduct({ id: 2 }),
  createProduct({ id: 3 }),
  createProduct({ id: 4 }),
  createProduct({ id: 5 }),
  createProduct({ id: 6 }),
];
