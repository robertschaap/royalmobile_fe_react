import { cartReducer, initialCartState } from '../cart';
import { CartActionTypes } from '../../ducks/cart';

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(initialCartState, {} as CartActionTypes)).toEqual({
      isFetching: false,
      hasError: false,
      collection: {
        items: [],
      },
    });
  });
});
