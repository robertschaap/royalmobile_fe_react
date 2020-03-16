import { ProductVariant } from '../types/products';

/**
 * Returns an array of variants with only capacity related properties
 */
const getProductVariantCapacitiesForColor = (productVariants: ProductVariant[], color: string) => {
  return productVariants.reduce((accumulator, variant) => {
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
const getProductVariantColorsForCapacity = (productVariants: ProductVariant[], capacity: string) => {
  return productVariants.reduce((accumulator, variant) => {
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
