import ProductUtil from '../ProductUtil';
import { ProductVariant } from '../../types/products';

const variants = [{
  variantId: 'variant-id1',
  color: 'color-id1',
  colorHex: 'colorHex-id1',
  capacity: 'capacity-id1',
}] as ProductVariant[];

describe('ProductUtil', () => {
  describe('getProductVariant', () => {
    it('should return a variant if a match is found', () => {
      expect(
        ProductUtil.getProductVariant(variants, 'variant-id1'),
      ).toEqual({
        variantId: 'variant-id1',
        color: 'color-id1',
        colorHex: 'colorHex-id1',
        capacity: 'capacity-id1',
      });
    });

    it('should return undefined if no variants are passed', () => {
      expect(
        ProductUtil.getProductVariant([], 'not-a-valid-id'),
      ).toEqual(undefined);
    });

    it('should return undefined if no matches are found', () => {
      expect(
        ProductUtil.getProductVariant(variants, 'not-a-valid-id'),
      ).toEqual(undefined);
    });
  });

  describe('getProductVariantCapacitiesForColor', () => {
    it('should return an array of capacity properties for a color', () => {
      expect(
        ProductUtil.getProductVariantCapacitiesForColor(variants, 'color-id1'),
      ).toEqual([{
        variantId: 'variant-id1',
        capacity: 'capacity-id1',
      }]);
    });

    it('should return an empty array if no variants are passed', () => {
      expect(
        ProductUtil.getProductVariantCapacitiesForColor([], 'color-id1'),
      ).toEqual([]);
    });

    it('should return an empty array if no matches are found', () => {
      expect(
        ProductUtil.getProductVariantCapacitiesForColor(variants, 'not-a-valid-id'),
      ).toEqual([]);
    });
  });

  describe('getProductVariantColorsForCapacity', () => {
    it('should return an array of of color properties for a capacity', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity(variants, 'capacity-id1'),
      ).toEqual([{
        variantId: 'variant-id1',
        color: 'color-id1',
        colorHex: 'colorHex-id1',
      }]);
    });

    it('should return an empty array if no variants are passed', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity([], ''),
      ).toEqual([]);
    });

    it('should return an empty array if no matches are found', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity(variants, 'not-a-valid-id'),
      ).toEqual([]);
    });
  });
});
