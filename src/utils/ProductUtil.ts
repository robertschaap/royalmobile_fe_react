import { Product } from '../types/products';

/**
 * Returns an array of variants with only capacity related properties
 */
const getProductVariantCapacitiesForColor = (product: Product, color: string) => {
  return product.variants.reduce((accumulator, variant) => {
    if (variant.color === color) {
      accumulator.push({
        id: variant.variantId,
        capacity: variant.capacity,
      });
    }

    return accumulator;
  }, [] as { id: string; capacity: string; }[]);
};

/**
 * Returns an array of variants with only color related properties
 */
const getProductVariantColorsForCapacity = (product: Product, capacity: string) => {
  return product.variants.reduce((accumulator, variant) => {
    if (variant.capacity === capacity) {
      accumulator.push({
        id: variant.variantId,
        color: variant.color,
        colorHex: variant.colorHex,
      });
    }

    return accumulator;
  }, [] as { id: string; color: string; colorHex: string; }[]);
};

export default {
  getProductVariantCapacitiesForColor,
  getProductVariantColorsForCapacity,
}
