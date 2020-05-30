import StringUtil from '../StringUtil';

describe('StringUtil', () => {
  describe('capitalise', () => {
    it('should capitalise the first letter of a string', () => {
      expect(StringUtil.capitalise('test test')).toEqual('Test test');
    });
  });
