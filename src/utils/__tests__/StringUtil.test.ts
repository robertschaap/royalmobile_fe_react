import StringUtil from '../StringUtil';

describe('StringUtil', () => {
  describe('capitalise', () => {
    it('should capitalise the first letter of a string', () => {
      expect(StringUtil.capitalise('test test')).toEqual('Test test');
    });
  });

  describe('formatPrice', () => {
    it('should format a price', () => {
      expect(StringUtil.formatPrice('1')).toEqual('1,00');
      expect(StringUtil.formatPrice('1,5')).toEqual('1,50');
      expect(StringUtil.formatPrice('1,50')).toEqual('1,50');
    });

    it('should format a price when passed an incomplete price', () => {
      expect(StringUtil.formatPrice('')).toEqual('0,00');
      expect(StringUtil.formatPrice(',0')).toEqual('0,00');
      expect(StringUtil.formatPrice(',00')).toEqual('0,00');
    });
  });
});
