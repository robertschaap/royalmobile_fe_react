import StorageUtil from '../StorageUtil';

describe('StorageUtil', () => {
  afterEach(() => {
    localStorage.clear();
  });

  describe('getCartId', () => {
    it('should get the cart id if there is one', () => {
      localStorage.setItem('royalmobile::cartId', 'cart-id');
      expect(StorageUtil.getCartId()).toEqual('cart-id');
    });

    it('should return null if there is no cart id', () => {
      expect(StorageUtil.getCartId()).toEqual(null);
    });
  });

  describe('setCartId', () => {
    it('should set the cart id', () => {
      StorageUtil.setCartId('cart-id');
      expect(localStorage.getItem('royalmobile::cartId')).toEqual('cart-id');
    });
  });
});
