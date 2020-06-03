const CART_ID = 'royalmobile::cartId';

const getCartId = () => {
  return localStorage.getItem(CART_ID);
};

const setCartId = (cartId: string) => {
  localStorage.setItem(CART_ID, cartId);
};

export default {
  getCartId,
  setCartId,
};
