import { initialCartState } from '../cart';

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(initialCartState).toEqual({
      isFetching: false,
      hasError: false,
      collection: {
        items: [],
      },
    });
  });
});
