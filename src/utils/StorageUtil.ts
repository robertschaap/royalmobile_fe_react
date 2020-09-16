import { ProductSelection } from '../types/products';

const CART_ID = 'royalmobile::cartId';
const PRODUCT_SELECTION = 'royalmobile::productSelection';

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

const getProductSelection = (): Partial<ProductSelection> => {
  return JSON.parse(sessionStorage.getItem(PRODUCT_SELECTION) ?? '{}');
};

const setProductSelection = (selection: ProductSelection) => {
  sessionStorage.setItem(PRODUCT_SELECTION, JSON.stringify(selection));
};

const clearProductSelection = () => {
  sessionStorage.removeItem(PRODUCT_SELECTION);
};

export default {
  clearAll,
  clearProductSelection,
  getCartId,
  getProductSelection,
  setCartId,
  setProductSelection,
};
