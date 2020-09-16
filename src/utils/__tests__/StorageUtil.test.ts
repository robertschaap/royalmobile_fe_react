import StorageUtil from '../StorageUtil';

describe('StorageUtil', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        clear: jest.fn(),
      },
    });
  });

  describe('getCartId', () => {
    it('should get the cart id if there is one', () => {
      (localStorage.getItem as jest.Mock).mockReturnValueOnce('cart-id');

      expect(StorageUtil.getCartId()).toEqual('cart-id');
      expect(localStorage.getItem).toHaveBeenCalledWith('royalmobile::cartId');
    });

    it('should return null if there is no cart id', () => {
      expect(StorageUtil.getCartId()).toEqual(null);
    });
  });

  describe('setCartId', () => {
    it('should set the cart id', () => {
      StorageUtil.setCartId('cart-id');

      expect(localStorage.setItem).toHaveBeenCalledWith('royalmobile::cartId', 'cart-id');
    });
  });
});
