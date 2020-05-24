import StringUtil from '../StringUtil';

describe('StringUtil', () => {
  describe('capitalise', () => {
    expect(StringUtil.capitalise('test test')).toEqual('Test test');
  });
});
