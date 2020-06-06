import { ProductVariant, ProductColor, ProductCapacity } from '../types/products';

/**
 * Returns a variant if matched
 */
const getProductVariant = (productVariants: ProductVariant[], variantId: string): ProductVariant | undefined => {
  return productVariants.find((variant) => variant.variantId === variantId);
};

/**
 * Returns an array of variants with only capacity related properties
 */
const getProductVariantCapacitiesForColor = (productVariants: ProductVariant[], color: string): ProductCapacity[] => {
  return productVariants.reduce((accumulator, variant) => {
    if (variant.color === color) {
      accumulator.push({
        variantId: variant.variantId,
        capacity: variant.capacity,
      });
    }

    return accumulator;
  }, [] as ProductCapacity[]);
};

/**
 * Returns an array of variants with only color related properties
 */
const getProductVariantColorsForCapacity = (productVariants: ProductVariant[], capacity: string): ProductColor[] => {
  return productVariants.reduce((accumulator, variant) => {
    if (variant.capacity === capacity) {
      accumulator.push({
        variantId: variant.variantId,
        color: variant.color,
        colorHex: variant.colorHex,
      });
    }

    return accumulator;
  }, [] as ProductColor[]);
};

export default {
  getProductVariant,
  getProductVariantCapacitiesForColor,
  getProductVariantColorsForCapacity,
};
