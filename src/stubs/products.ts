import { Product, ProductVariant } from '../types/products';

import { Server, Row } from '.';

type ProductFactoryReturnType = Omit<Product, 'id' |'model' | 'modelId'> & {
  model(id: number): string;
  modelId(id: number): string;
};

export const ProductFactory = (): ProductFactoryReturnType => {
  return {
    manufacturer: 'manufacturer-1',
    model: (id) => `Model ${id + 1}`,
    modelId: (id) => `manufacturer-modelid${id + 1}`,
    variants: [{
      id: 1,
      variantId: 'model-id1-00gb-color1',
      color: 'color1',
      colorHex: '#cccccc',
      capacity: '00gb',
      is_in_stock: true,
      is_preorder: true,
      regular_price: '000',
      discounted_price: '000',
      has_discounts: true,
    }, {
      id: 2,
      variantId: 'model-id1-00gb-color2',
      color: 'color2',
      colorHex: '#dddddd',
      capacity: '00gb',
      is_in_stock: true,
      is_preorder: true,
      regular_price: '000',
      discounted_price: '000',
      has_discounts: true,
    }, {
      id: 3,
      variantId: 'model-id1-01gb-color1',
      color: 'color1',
      colorHex: '#cccccc',
      capacity: '01gb',
      is_in_stock: true,
      is_preorder: true,
      regular_price: '000',
      discounted_price: '000',
      has_discounts: true,
    }, {
      id: 4,
      variantId: 'model-id1-01gb-color2',
      color: 'color2',
      colorHex: '#dddddd',
      capacity: '01gb',
      is_in_stock: true,
      is_preorder: true,
      regular_price: '000',
      discounted_price: '000',
      has_discounts: true,
    }],
    specifications: {},
  };
};

interface CreateProductVariant {
  id: number;
  modelId?: string;
  capacity: string;
  color: string;
  colorHex: string;
  is_in_stock?: boolean;
  is_preorder?: boolean;
  regular_price?: string;
  discounted_price?: string;
  has_discounts?: boolean;
}

const createProductVariant = (props: CreateProductVariant): ProductVariant => {
  const {
    capacity,
    color,
    colorHex,
    id,
    modelId,
    is_in_stock = true,
    is_preorder = true,
    regular_price = '265',
    discounted_price = '239',
    has_discounts = true,
  } = props;

  return {
    id,
    variantId: `${modelId}-${capacity}-${color}`,
    color,
    colorHex,
    capacity,
    is_in_stock,
    is_preorder,
    regular_price,
    discounted_price,
    has_discounts,
  };
};

const createDefaultProductVariants = (modelId: string): ProductVariant[] => {
  const defaultColors = [
    { color: 'white', colorHex: '#f5f5f7' },
    { color: 'blue', colorHex: '#023b63' },
    { color: 'red', colorHex: '#d82e2e' },
    { color: 'green', colorHex: '#d8efd5' },
    { color: 'black', colorHex: '#25212b' },
  ];

  const colorsByCapacity = ['64gb', '128gb', '256gb', '512gb'].reduce((acc, capacity) => {
    const colorsForCapacity = defaultColors.map((color) => ({
      capacity,
      ...color,
    }));

    return acc.concat(colorsForCapacity);
  }, [] as { [key: string]: string }[]);

  const productVariants = colorsByCapacity.map(({ capacity, color, colorHex }, id: number) => {
    return createProductVariant({ id, modelId, capacity, color, colorHex });
  });

  return productVariants;
};

export const seedProducts = (server: Server) => {
  server.createList('product', 6, { manufacturer: 'Apple', model: 'iPhone 12', modelId: 'apple-iphone12' }).forEach((product: Row<Product>) => {
    product.update({
      variants: createDefaultProductVariants(product.modelId),
    });
  });
};
