import dedupeArray from '../dedupeArray';

describe('dedupeArray', () => {
  it('should return an empty array if one is passed', () => {
    expect(dedupeArray([])).toEqual([]);
  });

  it('should de-deuplicate an array', () => {
    expect(dedupeArray([1, 2, 1])).toEqual([1, 2]);
    expect(dedupeArray(['a', 'b', 'a'])).toEqual(['a', 'b']);
  })
});
