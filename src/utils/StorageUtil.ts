const CART_ID = 'royalmobile::cartId';

const clearAll = () => {
  localStorage.clear();
  sessionStorage.clear();
};

const getCartId = () => {
  return localStorage.getItem(CART_ID);
};

const setCartId = (cartId: string) => {
  localStorage.setItem(CART_ID, cartId);
};

export default {
  clearAll,
  getCartId,
  setCartId,
};
