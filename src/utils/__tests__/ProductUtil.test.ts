import ProductUtil from '../ProductUtil';
import { ProductVariant } from '../../types/products';

const variants = [{
  variantId: 'variant-id1',
  color: 'color-id1',
  colorHex: 'colorHex-id1',
  capacity: 'capacity-id1',
}] as ProductVariant[];

describe('ProductUtil', () => {
  describe('getProductVariantColorsForCapacity', () => {
    it('should return an array of of color properties for a capacity', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity(variants, 'capacity-id1')
      ).toEqual([{
        id: 'variant-id1',
        color: 'color-id1',
        colorHex: 'colorHex-id1',
      }]);
    });

    it('should return an empty array if no variants are passed', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity([], '')
      ).toEqual([]);
    });

    it('should return an empty array if no matches are found', () => {
      expect(
        ProductUtil.getProductVariantColorsForCapacity(variants, 'not-a-valid-id')
      ).toEqual([]);
    });
  });
});
